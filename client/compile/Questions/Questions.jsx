import React from 'react';
import './questions.scss';
import SearchBar from './subcomponents/SearchBar.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';
import MoreQuestions from './subcomponents/MoreQuestions.jsx';
import AddQuestion from './subcomponents/AddQuestion.jsx';


class Questions extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      expanded: 0
    };
  }

  render() {
    return (
      <div className="questionsWidget">
        <h6>QUESTIONS &amp; ANSWERS</h6>
        <SearchBar />
        <div className="questionsList">
          <QuestionsList expanded={this.state.expanded}/>
        </div>
        <div className="questionButtons">
          <MoreQuestions />
          <div></div>
          <AddQuestion />
        </div>
      </div>
    )
  }
}

export default Questions;