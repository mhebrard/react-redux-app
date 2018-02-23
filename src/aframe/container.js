import {connect} from 'react-redux';
import * as s from '../selectors';
import Component from './component';

const mapStateToProps = state => ({
  color: s.colorSelector(state)
});

const mapDispatchToProps = () => ({
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
