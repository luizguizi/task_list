import { useState } from 'react'
import './App.css'

import Td from './components/Td';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

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

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
    <div className="app">
      <h1>Lista de tarefas do Gui</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <div className='todo_list'>
       {todos
       .filter((todo) => filter === "All"
        ? true
        : filter === "Completed" 
        ? todo.isCompleted
        : !todo.isCompleted
       )
       .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()) )
        .sort((a,b) => 
          sort === "Asc"
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
        )
       .map((todo) => (
       <Td key={todo.id}  todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
       ))}
      </div>
      <TodoForm Addtodo={Addtodo}  />


    </div>
  )
}

export default App
