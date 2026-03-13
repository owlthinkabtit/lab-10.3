import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext'

export function TodoInput() {
  const [ text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  function handleFormSubmit(event) {
    event.preventDefault();

    if(text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  }

  return(
    <form onSubmit={handleFormSubmit}>
      <input  
        type="text"
        placeholder='What needs to be done?'
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>  
    </form>
  )
}