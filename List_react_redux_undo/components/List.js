import React,{ PropTypes } from 'react'
import Item from './Item'

const List = ({ items, onTodoClick }) => (
  <ul>
    {items.map(item => 
      <Item
        key={item.id}
        {...item}
        onClick={() => onTodoClick(item.id)}
      />
    )}
  </ul>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick:PropTypes.func.isRequired
}

export default List