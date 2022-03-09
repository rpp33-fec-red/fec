import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchBar from './subcomponents/SearchBar.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';
import QuestionButtons from './subcomponents/QuestionButtons.jsx';
import {sampleData} from './sampleData.js';
import './questionsStyles.scss';

class QuestionsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      queriedQuestions: sampleData.results,
      maxQuestionsDisplayed: 2,
      allQuestionsDisplayed: false,
      questionsData: sampleData.results
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDisplayMoreQuestions = this.handleDisplayMoreQuestions.bind(this);
    this.queryQuestions = this.queryQuestions.bind(this);
  }

  componentDidMount() {
    let request = {
      endpoint: '/qa/questions',
      params: {
        product_id: this.props.product_id,
        page: 1,
        count: 20
      }
    };
    axios.post('/getQuestions', request)
      .then((response) => {
        if (response.data.results) {
          const sorted = response.data.results.sort((a, b) => {
            return b.question_helpfulness - a.question_helpfulness;
          });
          if (sorted.length < 3) {
            this.setState({
              allQuestionsDisplayed: true,
              queriedQuestions: sorted,
              questionsData: sorted
            });
          } else {
            this.setState({
              allQuestionsDisplayed: false,
              queriedQuestions: sorted,
              questionsData: sorted
            });
          }
        } else {
          this.setState({
            allQuestionsDisplayed: true,
            questionsData: [],
            queriedQuestions: []
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  handleDisplayMoreQuestions() {
    this.setState({
      maxQuestionsDisplayed: this.state.maxQuestionsDisplayed + 2
    }, () => {
      if (this.state.queriedQuestions.length <= this.state.maxQuestionsDisplayed) {
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
      }, function() {
        let questions = this.queryQuestions(this.state.questionsData);
        this.setState({
          queriedQuestions: questions
        });
      });
    } else if (this.state.query !== '') {
      this.setState({
        query: '',
        queriedQuestions: this.state.questionsData
      });
    }
  }

  queryQuestions(questions) {
    let questionsSearched = [];
    for (const question of questions) {
      if (question.question_body.indexOf(this.state.query) !== -1) {
        questionsSearched.push(question);
      }
    }
    return questionsSearched;
  }

  render() {
    return (
      <div className="questions-widget">
        <p className="questions-title">QUESTIONS &amp; ANSWERS</p>
        <SearchBar search={this.handleSearch}/>
        <QuestionsList
          questions={this.state.queriedQuestions}
          displayed={this.state.maxQuestionsDisplayed}
          scroll={this.state.allQuestionsDisplayed}
          product_name={this.props.product_name}
        />
        <QuestionButtons
          questions={this.state.questionsData}
          allQuestionsDisplayed={this.state.allQuestionsDisplayed}
          displayMore={this.handleDisplayMoreQuestions}
          product_id={this.props.product_id}
          product_name={this.props.product_name}
        />
      </div>
    );
  }
}

QuestionsWidget.propTypes = {
  getQuestions: PropTypes.func,
  product_id: PropTypes.string,
  product_name: PropTypes.string
};

export default QuestionsWidget;