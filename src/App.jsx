
import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  

  return (
    <div>
      <h1>Quest that need to be fullfilled</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
