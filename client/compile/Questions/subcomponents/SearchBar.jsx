import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="search"
        id="questions-search-bar"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={props.search}
      />
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func
};

export default SearchBar;