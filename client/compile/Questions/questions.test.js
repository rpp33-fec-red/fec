import React from 'react';
import TestRenderer from 'react-test-renderer';
import Questions from './Questions.jsx';
import searchBarTree from './subcomponents/SearchBar.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';

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
    var questionsListTree = TestRenderer.create(<QuestionsList />).toJSON();

    expect(questionsListTree).toMatchSnapshot();
  });
});

describe('Question component', () => {
  test('loads and displays Question component', () => {
    var questionTree = TestRenderer.create(<Question />).toJSON();

    expect(questionTree).toMatchSnapshot();
  });
});

describe('AnswerList component', () => {
  test('loads and displays AnswerList component', () => {
    var answerListTree = TestRenderer.create(<AnswerList />).toJSON();

    expect(answerListTree).toMatchSnapshot();
  });
});

describe('Answer component', () => {
  test('loads and displays Answer component', () => {
    var answerTree = TestRenderer.create(<Answer />).toJSON();

    expect(answerTree).toMatchSnapshot();
  });
});