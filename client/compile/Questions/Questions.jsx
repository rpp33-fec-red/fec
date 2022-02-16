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
      maxQuestionsDisplayed: 2,
      allQuestionsDisplayed: false,
      questionsData: sampleData.results
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
        <QuestionsList questions={this.state.questionsData}/>
        <QuestionButtons allQuestionsDisplayed={this.state.allQuestionsDisplayed} />
      </div>
    );
  }
}

export default QuestionsWidget;