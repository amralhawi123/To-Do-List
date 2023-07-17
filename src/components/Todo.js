import React from 'react'

const Todo = ({todo, onDelete, toggelComplete}) => {
  return (
    <div className='d-f'>
      <div onClick={toggelComplete} style={{textDecoration: todo.complete? "line-through": ""}}>
{todo.text}
      </div>
      <button className='delete-btn' onClick={onDelete}>X</button>
    </div>
  )
}

export default Todo
