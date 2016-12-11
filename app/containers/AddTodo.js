import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if(!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
        <input ref={(node) => {
            input = node
          }}
        />
        <input type='submit' value='Add Todo'
        />
    </form>
  )
}
  
// Dispatchers - something that dispatches an action

AddTodo = connect()(AddTodo)

const AddTodo 

export default AddTodo