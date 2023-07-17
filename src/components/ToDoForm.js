import React, {useState} from 'react'
import shortid from 'shortid'
const ToDoForm = (props) => {

  const [text, setText] = useState('')

  const handelSubmit =(e)=>{
    e.preventDefault()
    props.addTodo({
      id: shortid.generate(),
      text:text,
      complete:false
    })
    setText("")
    
  }

  const handelChange =(e)=>{
      setText(e.target.value)
    }

  return (
    <form onSubmit={handelSubmit}>
      <input className='input-field' type='text' onChange={handelChange} value={text}/>
      <button className='btn' onClick={handelSubmit}>Add To Do</button>
    </form>
  )
}

export default ToDoForm
