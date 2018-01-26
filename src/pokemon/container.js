import {connect} from 'react-redux';
import * as s from '../selectors';
import * as a from './actions';
import Component from './component';

const mapStateToProps = state => ({
  items: s.pokemonListSelector(state)
});

const mapDispatchToProps = dispatch => ({
  handleRequest: () => {
    dispatch(a.requestPokemon('first'));
  },
  handlePrevious: () => {
    dispatch(a.requestPokemon('prev'));
  },
  handleNext: () => {
    dispatch(a.requestPokemon('next'));
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
