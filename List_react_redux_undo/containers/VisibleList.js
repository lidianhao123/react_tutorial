import { connect } from 'react-redux'
import { toggleDelete } from '../actions'
import List from '../components/List'

const mapStatsToProps = (state) => {
  return {
    items: state.items.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) =>{
      dispatch(toggleDelete(id))
    }
  }
}

const VisibleList = connect(
  mapStatsToProps,
  mapDispatchToProps
)(List)

export default VisibleList