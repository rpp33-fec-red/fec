import React from 'react';

class QuestionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props.allQuestionsDisplayed);
    return (
      <div className="question-buttons">
        {!this.props.allQuestionsDisplayed &&
          <button>MORE ANSWERED QUESTIONS</button>
        }
        <button>ADD A QUESTION +</button>
      </div>
    );
  }
}

export default QuestionButtons;