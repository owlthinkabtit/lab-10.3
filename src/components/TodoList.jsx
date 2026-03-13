import { useContext } from "react";
import { TodoContext } from '../context/TodoContext';

export function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
  console.log("Current todos are:", todos);
  if (!todos) return <p>Waiting for the radio signal...</p>;
  if (todos.length === 0) return <p>No chores yet! Add one Above!</p>
  return(
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
          
      ))}
    </ul>
  )
}