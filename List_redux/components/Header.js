import React, { Component, PropTypes } from 'react'

class Header extends Component {

  render() {
    let input
    return (
      <form onSubmit= { e => {
        e.preventDefault()
        if(!input.value.trim()){
          return
        }
        this.props.onAdd(input.value)
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
}

Header.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default Header