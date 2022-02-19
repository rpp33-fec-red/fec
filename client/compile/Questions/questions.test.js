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
<<<<<<< HEAD
=======
=======
>>>>>>> aa561d7f36cc9818605710ab05f328e4818c7e80
>>>>>>> 0d6e9a4e32d0578d062199d147bf47d4431b87ef
<<<<<<< HEAD
=======

>>>>>>> d9c643e05bdea633ff8be31ce2b6cf9abfbf5bc8
<<<<<<< HEAD
=======
>>>>>>> c0f4489af1376214360124340154d525f7333115
=======
<<<<<<< HEAD
>>>>>>> 1272cdcb3db7b29ece26c22d74cb0c249cf1c294
=======
=======
>>>>>>> c0f4489af1376214360124340154d525f7333115
>>>>>>> aa561d7f36cc9818605710ab05f328e4818c7e80
>>>>>>> 0d6e9a4e32d0578d062199d147bf47d4431b87ef
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
