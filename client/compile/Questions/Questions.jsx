import React from 'react';
import SearchBar from './subcomponents/SearchBar.jsx';
//import QuestionsList from './subcomponents/QuestionsList.jsx';
//import MoreQuestions from './subcomponents/MoreQuestions.jsx';
//import AddQuestion from './subcomponents/AddQuestion.jsx';


class QuestionsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      maxQuestionsDisplayed: 2
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
        <p>REPLACE WITH QUESTIONSLIST COMPONENT</p>

        <div className="questionButtons">
          <p>REPLACE WITH MOREQUESTIONS COMPONENT</p>
          <p>REPLACE WITH ADDQUESTIONS COMPONENT</p>
        </div>
      </div>
    )
  }
}

export default QuestionsWidget;