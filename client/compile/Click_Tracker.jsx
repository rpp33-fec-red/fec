/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

class ClickTracker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clicks: {}
    };
    this.trackClick = this.trackClick.bind(this);
  }
  trackClick (event, child){
    let widget = child.type.WrappedComponent
      ? child.type.WrappedComponent.name
      : child.type.name;
    let clickObject = {
      widget: widget,
      time: new Date(),
      element: event.target.outerHTML
    };
    console.log('clickObject', clickObject);
    axios.post('/postData', {
      data: clickObject,
      endpoint: '/interactions',
      params: null
    })
      .catch ((err) => { console.log(err); });
  }
  render () {
    return (
      <>
        {React.Children.map(this.props.children, (child) => {
          return (
            <div onClick={(event) => { this.trackClick(event, child);}}>{React.cloneElement(child)}</div>
          );
        })}
      </>
    );
  }
}

export default ClickTracker;