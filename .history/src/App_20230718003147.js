import React, { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import Todo from './components/Todo'
import './App.css'

const App = () => {

  let [toDos, setToDos] = useState([])
  const [todoToshow, setTodoToshow] = useState("all")
  const [toggleAllComplete, setToggleAllComplete] = useState(true)

  const addTodo =(todo)=> {
    setToDos([todo, ...toDos])
    
  }

  const handelDelete =(id)=> {
    setToDos(toDos.filter((todo) => todo.id !== id))
  }
  const updateTodoToshow =(s)=> {
    setTodoToshow(s)
  }

  const removeAllTodocomplete=()=>{
    setToDos(toDos.filter((todo)=> !todo.complete))
  }
  const toggelComplete = (id) => {
      setToDos(toDos.map((todo)=> {
        if(todo.id === id){
            return{
              ...todo,
              complete:!todo.complete
            }
        } else{
          return todo
        }
      }))
  }
  if(todoToshow === "active"){
    toDos = toDos.filter((todo) => !todo.complete)
  }else if(todoToshow === "complete"){
    toDos = toDos.filter((todo) => todo.complete)
  }
  return (
    <div className='container'>
      <ToDoForm addTodo={addTodo}/>
      {
        toDos.map((todo)=> (
          <Todo key={todo.id} todo={todo} onDelete={()=> handelDelete(todo.id)} toggelComplete={()=> toggelComplete(todo.id)}/>
        ))
      }
      <div>
        <button className='update-btn btn' onClick={()=> updateTodoToshow("all")}>All</button>
        <button className='update-btn btn' onClick={()=> updateTodoToshow("active")}>Active</button>
        <button className='update-btn btn' onClick={()=> updateTodoToshow("complete")}>Complete</button>
      </div>
      {todos.some(todo => todo.complete) ? 
            <button className='all-btn btn' onClick={removeAllTodosThatAreComplete}>Remove all complete todos</button> 
            : null}
      
      <button className='all-btn btn' onClick={()=> {
        setToDos(
          toDos.map((todo)=> ({
            ...todo,
            complete:toggleAllComplete
          }))
        )
        setToggleAllComplete(!toggleAllComplete)
      }}>Toggle all Complete : {`${toggleAllComplete}`} </button>
    </div>
  )
}

export default App
