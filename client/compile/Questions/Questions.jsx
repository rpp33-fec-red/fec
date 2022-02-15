import React from 'react';
import SearchBar from './subcomponents/SearchBar.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';
import QuestionButtons from './subcomponents/QuestionButtons.jsx';
import './questionsStyles.scss';

import { sampleData } from './sampleData.js';


class QuestionsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
<<<<<<< HEAD
      maxQuestionsDisplayed: 2,
      allQuestionsDisplayed: false,
      questionData: sampleData.results
=======
      questionsData: sampleData.results
>>>>>>> c320f6a90dc5e09a0d0358d7c4b4ebc7ac7b037d
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    let query = event.target.value;

    if (query.length > 2) {
      this.setState({
        query: query
      });
    } else if (this.state.query !== '') {
      this.setState({
        query: ''
      });
    }
  }

  render() {
    return (
      <div className="questionsWidget">
        <h6>QUESTIONS &amp; ANSWERS</h6>
        <SearchBar search={this.handleSearch}/>
<<<<<<< HEAD
        <QuestionsList questions={this.state.questionsData}/>
=======
        <QuestionsList questions={this.state.questionData}/>
<<<<<<< HEAD
        <QuestionButtons allQuestionsDisplayed={this.state.allQuestionsDisplayed} />
=======
>>>>>>> 24a7ce624f601bebc077e3e573cd691fa465ca69
        <div className="questionButtons">
          <p>REPLACE WITH MOREQUESTIONS COMPONENT</p>
          <p>REPLACE WITH ADDQUESTIONS COMPONENT</p>
        </div>
>>>>>>> c320f6a90dc5e09a0d0358d7c4b4ebc7ac7b037d
      </div>
    );
  }
}

export default QuestionsWidget;