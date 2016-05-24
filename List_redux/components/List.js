import React, { Component, PropTypes } from 'react'
import Item from './Item'

class List extends Component {

  render(){
    return (
      <div>
      <p>{this.props.items.length}</p>
      <ul>
         {this.props.items.map(item => 
           <Item
             key={item.id}
             {...item}
             onClick={() => this.props.onDelete(item.id)}
           />
         )}
      </ul>
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDelete:PropTypes.func.isRequired
}

export default List