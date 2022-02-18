import React from 'react';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input type="search" id="questions-search-bar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={props.search}></input>
    </div>
  );
}

export default SearchBar;