import { combineReducers } from 'redux'
import items from './todos'

const rootReducer = combineReducers({
  items
})

export default rootReducer