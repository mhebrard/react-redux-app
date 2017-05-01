import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Filter from '../components/filter';

class Footer extends Component {
  render() {
    const {filters} = this.props;
    return (
      <div>
        Show:
        {' '}
        <Filter
          label="All"
          filter={filters.SHOW_ALL}
          {...this.props}
          />
        {' - '}
        <Filter
          label="Active"
          filter={filters.SHOW_ACTIVE}
          {...this.props}
          />
        {' - '}
        <Filter
          label="Completed"
          filter={filters.SHOW_COMPLETED}
          {...this.props}
          />
      </div>
    );
  }
}

Footer.propTypes = {
  filters: PropTypes.object.isRequired
};

export default Footer;
