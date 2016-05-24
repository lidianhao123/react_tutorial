import React, { Component, PropTypes } from 'react'

class Item extends Component {
  render() {
    return (
      <li onClick={this.props.onClick}>
        {this.props.text}
      </li>
    )
  }
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Item
