import React from 'react'
import Header from '../containers/Header'
import VisibleList from '../containers/VisibleList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <Header/>
    <UndoRedo />
    <VisibleList />
  </div>
)

export default App
