import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Filter from './filter';

class Footer extends Component {
  render() {
    const {filters, visibilityFilter, setVisibilityFilter} = this.props;
    return (
      <div>
        Show:
        {' '}
        <Filter
          label="All"
          filter={visibilityFilter}
          setFilter={filters.SHOW_ALL}
          onClick={setVisibilityFilter}
          />
        {' '}
        <Filter
          label="Active"
          filter={visibilityFilter}
          setFilter={filters.SHOW_ACTIVE}
          onClick={setVisibilityFilter}
          />
        {' '}
        <Filter
          label="Completed"
          filter={visibilityFilter}
          setFilter={filters.SHOW_COMPLETED}
          onClick={setVisibilityFilter}
          />
      </div>
    );
  }
}

Footer.propTypes = {
  filters: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

export default Footer;
