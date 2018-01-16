import {connect} from 'react-redux';
import * as s from '../selectors';
import * as a from './actions';
import Component from './component';

const mapStateToProps = state => ({
  color: s.colorSelector(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(a.switchColor());
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
