import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input type="search" id="questionsSearchBar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={props.search}></input>
    </div>
  );
}

export default SearchBar;