import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const {label, filter, currentFilter} = this.props;
    return (
      <span
        style={{
          textDecoration: filter === currentFilter ? 'underline' : 'none',
          cursor: 'pointer'
        }}
        onClick={this.handleClick}
        >
        {label}
      </span>
    );
  }
  handleClick() {
    this.props.onClick(this.props.filter);
  }
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;
