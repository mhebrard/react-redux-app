import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const {label, filter, visibilityFilter} = this.props;
    return (
      <span
        style={{
          textDecoration: filter === visibilityFilter ? 'underline' : 'none',
          cursor: 'pointer'
        }}
        onClick={this.handleClick}
        >
        {label}
      </span>
    );
  }
  handleClick() {
    this.props.filterOnClick(this.props.filter);
  }
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  filterOnClick: PropTypes.func.isRequired
};

export default Filter;
