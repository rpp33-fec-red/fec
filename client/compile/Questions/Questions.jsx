import React from 'react';
import SearchBar from './subcomponents/SearchBar.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';
import QuestionButtons from './subcomponents/QuestionButtons.jsx';
import './questionsStyles.scss';

class QuestionsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      maxQuestionsDisplayed: 2,
      allQuestionsDisplayed: false,
      questionsData: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDisplayMoreQuestions = this.handleDisplayMoreQuestions.bind(this);
  }

  componentDidMount() {
    this.props.getQuestions(`qa/questions/`, {product_id: this.props.product_id}, (data) => {
      this.setState({
        questionsData: data.results.results
      }, () => {
        console.log('questions', this.state.questionsData)
      });
    });
  }

  handleDisplayMoreQuestions(event) {
    this.setState({
      maxQuestionsDisplayed: this.state.maxQuestionsDisplayed + 2
    }, () => {
      if (this.state.questionsData.length <= this.state.maxQuestionsDisplayed) {
        this.setState({
          allQuestionsDisplayed: true
        });
      }
    });
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
        <QuestionsList questions={this.state.questionsData} displayed={this.state.maxQuestionsDisplayed} scroll={this.state.allQuestionsDisplayed}/>
        <QuestionButtons allQuestionsDisplayed={this.state.allQuestionsDisplayed} displayMore={this.handleDisplayMoreQuestions}/>
      </div>
    );
  }
}

export default QuestionsWidget;