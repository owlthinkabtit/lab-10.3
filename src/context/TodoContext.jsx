import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [ todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('my-todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo
    }));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function editTodo(id, newText) {
    setTodos(todos.map(todo => {
      return todo.id === id ? {...todo, text: newText } : todo;
    }));
  }

  function clearCompleted() {
    setTodos(todo.filter(todo => todo.completed === false));
  }

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}