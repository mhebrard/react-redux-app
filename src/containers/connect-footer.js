import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/index';
import {Filters} from '../actions/types';
import Footer from '../components/footer';

const mapStateToProps = state => ({
  filters: Filters,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  filterOnClick: f => dispatch(setVisibilityFilter(f))
});

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default ConnectTodoList;
