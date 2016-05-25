import React, { PropTypes } from 'react'
import { addTodo } from '../actions'

let Header = ({ dispatch }) => {
  let input

  return (
    <form onSubmit= { e => {
      e.preventDefault()
      if(!input.value.trim()){
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }}/>
      <button type="submit">
        添加
      </button>
    </form>
  )
}

export default Header