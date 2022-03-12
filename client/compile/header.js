
import React from 'react';
import PropTypes from 'prop-types';
class Header extends React.Component {

  constructor(props){
    super(props);
  }



  render() {
    return <div className="header">
      <img src="./doly.png"></img>
      <ul>
        <li><a href="">home</a></li>
      </ul>
      <span> <a href="">login</a></span>
    </div>;
  }



}


export default Header;