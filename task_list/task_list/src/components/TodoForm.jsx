import { useState } from "react"

const TodoForm = ({Addtodo}) => {

  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit =  (e) => {
    e.preventDefault() 
    
    if(!value || !category) return;
    Addtodo(value, category)
    setCategory('');
    setValue('');
  }
  return (
    <div>
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder='Qual será a tarefa?' onChange={(e) => setValue(e.target.value)} />
        <select  onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
    </form>
    </div>
  )
}

export default TodoForm