import React from 'react';
import SearchBar from './subcomponents/SearchBar.jsx';
//import QuestionsList from './subcomponents/QuestionsList.jsx';
import QuestionButtons from './subcomponents/QuestionButtons.jsx';
import './questionsStyles.scss';


class QuestionsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      maxQuestionsDisplayed: 2,
      allQuestionsDisplayed: false
    };
  }

  render() {
    return (
      <div className="questionsWidget">
        <h6>QUESTIONS &amp; ANSWERS</h6>
        <SearchBar search={this.handleSearch}/>
        <p>REPLACE WITH QUESTIONSLIST COMPONENT</p>

        <QuestionButtons allQuestionsDisplayed={this.state.allQuestionsDisplayed} />
      </div>
    );
  }
}

export default QuestionsWidget;