import React from 'react';
import TestRenderer from 'react-test-renderer';
import Questions from './Questions.jsx';
import QuestionButtons from './subcomponents/QuestionButtons.jsx';
import SearchBar from './subcomponents/SearchBar.jsx';
import Question from './subcomponents/Question.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';
import Answer from './subcomponents/Answer.jsx';
import AnswerList from './subcomponents/AnswerList.jsx';
import AddAnswerModal from './modals/AddAnswer.jsx';
import AddQuestionModal from './modals/AddQuestion.jsx';
import UploadPhotosModal from './modals/UploadPhotos';
import Model from '../model.js';
var model = new Model(false);
import { sampleData, answer } from './sampleData.js';

//https://jestjs.io/docs/getting-started

describe('Questions widget component', () => {
  var getData = function (){
    return model.getData;
  };
  test('loads and displays questions widget component', () => {
    var questionsTree = TestRenderer.create(<Questions getQuestions={getData} product_id="64620" product_name="Camo Onesie"/>).toJSON();
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

describe('AddAnswerModal component', () => {
  test('loads and displays Answer component', () => {
    var addAnswerModalTree = TestRenderer.create(<AddAnswerModal answer={answer}/>).toJSON();
    expect(addAnswerModalTree).toMatchSnapshot();
  });
});

describe('AddQuestionModal component', () => {
  test('loads and displays Answer component', () => {
    var addQuestionModalTree = TestRenderer.create(<AddQuestionModal answer={answer}/>).toJSON();
    expect(addQuestionModalTree).toMatchSnapshot();
  });
});

describe('UploadPhotosModal component', () => {
  test('loads and displays Answer component', () => {
    var uploadPhotosModalTree = TestRenderer.create(<UploadPhotosModal answer={answer} photos={{photoCount: 0, uploadedPhotos: []}}/>).toJSON();
    expect(uploadPhotosModalTree).toMatchSnapshot();
  });
});