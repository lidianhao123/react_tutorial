import undoable, { distinctState } from 'redux-undo'

const item = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }
    case 'DELETE_ITEM':
      if (state.id === action.id) {
        return false
      } else{
        return true
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'DELETE_ITEM':
      return state.filter(t =>
        item(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos, {
  filter: distinctState()
})

export default undoableTodos