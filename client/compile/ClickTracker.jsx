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
          element: toString(event.target), //click handler as prop added to outermost div of widget
          time: toString(Date.now()), //Unix time stamp
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