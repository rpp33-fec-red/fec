import React from 'react';
import TestRenderer from 'react-test-renderer';
import Questions from './Questions.jsx';
import QuestionButtons from './subcomponents/QuestionButtons.jsx';

//https://jestjs.io/docs/getting-started

describe('Questions widget component', () => {
  test('loads and displays questions widget comoponent', () => {
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