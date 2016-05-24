import React,{ Component, PropTypes } from 'react'
import { addTodo, toggleDelete } from '../actions'
import Header from './Header'
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.store.getState()
    }
    props.store.subscribe(this.change.bind(this))
  }

  change() {
    this.setState({
      items: this.props.store.getState()
    })
  }

  handleAdd(val) {
    this.props.store.dispatch(addTodo(val))
  }

  handleDelete(id) {
    this.props.store.dispatch(toggleDelete(id))
  }

  render() {

    return (
      <div>
        <Header onAdd={this.handleAdd.bind(this)}/>
        <List items={this.state.items} onDelete={this.handleDelete.bind(this)}/>
      </div>
    )
  }
}

//this.props.store
App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
