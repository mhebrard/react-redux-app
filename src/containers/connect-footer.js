import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/actions';
import {Filters} from '../actions/types';
import Footer from '../components/footer';

const mapStateToProps = state => ({
  filters: Filters,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = {
  setVisibilityFilter
};

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default ConnectTodoList;
