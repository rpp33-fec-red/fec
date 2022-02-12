import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        helpful: false
      }
  }

  render() {
    return (
      <p>ANSWER</p>
    );
  }
}

export default Answer;