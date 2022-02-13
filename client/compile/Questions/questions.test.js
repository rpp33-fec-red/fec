import React from 'react';
import TestRenderer from 'react-test-renderer';
import Questions from './Questions.jsx';
import SearchBar from './subcomponents/SearchBar.jsx';
import Question from './subcomponents/Question.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';
import Answer from './subcomponents/Answer.jsx';
import AnswerList from './subcomponents/AnswerList.jsx';
import { sampleData, answer } from './sampleData.js';

//https://jestjs.io/docs/getting-started

describe('Questions widget component', () => {
  test('loads and displays questions widget component', () => {
    var questionsTree = TestRenderer.create(<Questions />).toJSON();

    expect(questionsTree).toMatchSnapshot();
  });
});

describe('SearchBar component', () => {
  test('loads and displays searcbBar component', () => {
    var searchBarTree = TestRenderer.create(<SearchBar />).toJSON();

    expect(searchBarTree).toMatchSnapshot();
  });
});

describe('QuestionsList component', () => {
  test('loads and displays QuestionsList component', () => {
    var questionsListTree = TestRenderer.create(<QuestionsList questions={sampleData}/>).toJSON();

    expect(questionsListTree).toMatchSnapshot();
  });
});

describe('Question component', () => {
  test('loads and displays Question component', () => {
    var questionTree = TestRenderer.create(<Question question={sampleData.results[0]}/>).toJSON();

    expect(questionTree).toMatchSnapshot();
  });
});

describe('AnswerList component', () => {
  test('loads and displays AnswerList component', () => {
    var answerListTree = TestRenderer.create(<AnswerList answers={sampleData.results[0].answers}/>).toJSON();

    expect(answerListTree).toMatchSnapshot();
  });
});

describe('Answer component', () => {
  test('loads and displays Answer component', () => {
    var answerTree = TestRenderer.create(<Answer answer={answer}/>).toJSON();

    expect(answerTree).toMatchSnapshot();
  });
});