import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './components/App'

//create store use reducers
let store = createStore(reducers)

render(
  <App store={store}/>,
  document.getElementById('root')
)
