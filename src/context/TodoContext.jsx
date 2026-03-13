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
      id: Data.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    }));
  }

  function deleteTodo(id) {
    setTodos(todo.filter(todo => todo.id !== id));
  }

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}