import { useState } from 'react'
import './App.css'

import Td from './components/Td';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar algo",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Criar algo",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Criar algo",
      category: "trabalho",
      isCompleted: false,
    }
  ]);

  const Addtodo = (text, category) => {

    const newTodos = [...todos,{
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
    }
    
  ]
  setTodos(newTodos)
  };


  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null)

      setTodos(filterTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  const [search, setSearch] = useState('')

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todo_list'>
       {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()) ) .map((todo) => (
       <Td key={todo.id}  todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
       ))}
      </div>
      <TodoForm Addtodo={Addtodo}  />


    </div>
  )
}

export default App
