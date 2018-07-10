import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleSearch, searchTerm } = this.props;
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue w-60"
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

SearchBar.defaultProps = {
  searchTerm: '',
};

export default SearchBar;
