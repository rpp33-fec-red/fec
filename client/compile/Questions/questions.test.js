import React from 'react';
import TestRenderer from 'react-test-renderer';
import Questions from './Questions.jsx';
import QuestionButtons from './subcomponents/QuestionButtons.jsx';
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

describe('QuestionButtons component', () => {
  test('loads and displays Question Buttons comoponent', () => {
    var questionButtonsTree = TestRenderer.create(<QuestionButtons allQuestionsDisplayed={false} />).toJSON();
    expect(questionButtonsTree).toMatchSnapshot();
  });
});

describe('SearchBar component', () => {
  test('loads and displays SearchBar component', () => {
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24a7ce624f601bebc077e3e573cd691fa465ca69
=======
>>>>>>> 345571cd303da81464c0bc4b73c6ddef7bd80d0c

>>>>>>> c320f6a90dc5e09a0d0358d7c4b4ebc7ac7b037d
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
