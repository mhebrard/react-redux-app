import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../components/filter';

const Footer = ({filters, filterOnClick, visibilityFilter}) => (
  <div>
    Show:
    {' '}
    <Filter
      label="All"
      filter={filters.SHOW_ALL}
      currentFilter={visibilityFilter}
      onClick={filterOnClick}
      />
    {' - '}
    <Filter
      label="Active"
      filter={filters.SHOW_ACTIVE}
      currentFilter={visibilityFilter}
      onClick={filterOnClick}
      />
    {' - '}
    <Filter
      label="Completed"
      filter={filters.SHOW_COMPLETED}
      currentFilter={visibilityFilter}
      onClick={filterOnClick}
      />
  </div>
);

Footer.propTypes = {
  filters: PropTypes.object.isRequired,
  filterOnClick: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default Footer;
