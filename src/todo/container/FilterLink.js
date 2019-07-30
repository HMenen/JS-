import { connect } from 'react-redux'
import Link from '../component/Link'
import { setVisibilityFilter } from '../action/index'

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter
})

const mapDispatchProps = (dispatch, props) => ({
  onClick: dispatch(setVisibilityFilter(props.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Link)