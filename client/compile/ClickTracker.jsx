import React from 'react';
import axios from 'axios';
import Model from './model.js';
var model = new Model(false);

const ClickTracker = (WrappedComponent, selectData) => {
  return class ClickTracker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData
      };
      this.trackClicks = this.trackClicks.bind(this);
    }

    trackClicks(event) {
      event.preventDefault();
      let request = {
        data: {
          widget: this.state.data.widget, //passed in as data to HOC
          element: event.target.tagName, //selector of clicked element (P, DIV, A, etc)
          time: (new Date()).toGMTString() //GMT Timestamp with date
        },
        endpoint: '/interactions',
        params: null
      };
      axios.post('/postData', request)
        .catch((err) => {
          console.log(err);
        });
    }

    render() {
      return <WrappedComponent getData={model.getData} track={this.trackClicks} data={this.state.data} />;
    }
  };
};

export default ClickTracker;