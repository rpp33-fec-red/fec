/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */

import TestRenderer from 'react-test-renderer';
import {render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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
import { sampleData, answer } from './sampleData.js';

//https://jestjs.io/docs/getting-started

describe('Questions widget component', () => {
  test('loads and displays questions widget component', () => {
    var questionsTree = TestRenderer.create(<Questions product_id="64620" product_name="Camo Onesie"/>).toJSON();
    expect(questionsTree).toMatchSnapshot();
  });
  test('displays MORE QUESTIONS button when more than two questions are present', () => {
    const {getByText} = render(<Questions product_id="64620" product_name="Camo Onesie"/> );
    expect(getByText('MORE ANSWERED QUESTIONS')).toBeInTheDocument;
  });
  test('displays more questions when MORE QUESTIONS button is clicked', () => {
    const {getByText, queryByText} = render(<Questions product_id="64620" product_name="Camo Onesie"/> );
    let button = getByText('MORE ANSWERED QUESTIONS');
    fireEvent.click(button);
    expect(queryByText('Does it ever go on sale?')).toBeInTheDocument;
    expect(queryByText('MORE ANSWERED QUESTIONS')).not.toBeInTheDocument;
  });
  test('queries questions based on change of search bar input', () => {
    const {getByPlaceholderText, queryByText} = render(<Questions product_id="64620" product_name="Camo Onesie"/> );
    let searchBar = getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    fireEvent.change(searchBar, {target: {value: 'Does it ever go on sale?'}});
    expect(queryByText('Does it ever go on sale?')).toBeInTheDocument;
    expect(queryByText('How long does it last?')).not.toBeInTheDocument;
    expect(queryByText('Why is this product cheaper here than other sites?')).not.toBeInTheDocument;
    fireEvent.change(searchBar, {target: {value: ''}});
    expect(queryByText('Does it ever go on sale?')).toBeInTheDocument;
    expect(queryByText('How long does it last?')).not.toBeInTheDocument;
    expect(queryByText('Why is this product cheaper here than other sites?')).toBeInTheDocument;
  });
});

describe('QuestionButtons component', () => {
  test('loads and displays Question Buttons comoponent', () => {
    var questionButtonsTree = TestRenderer.create(<QuestionButtons allQuestionsDisplayed={false} />).toJSON();
    expect(questionButtonsTree).toMatchSnapshot();
  });
  test('opening and closing Add Question modal window', () => {
    const {getByText, queryByText} = render(<QuestionButtons allQuestionsDisplayed={false}/>);
    let openModalButton = getByText('ADD A QUESTION +');
    fireEvent.click(openModalButton);
    expect(getByText('ASK YOUR QUESTION')).toBeInTheDocument();
    let closeModalButton = getByText('X');
    fireEvent.click(closeModalButton);
    expect(queryByText('ASK YOUR QUESTION')).toBeNull();
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
  test('Increments Helpfulness vote when clicked', () => {
    const {getByText, getAllByText} = render(<Question question={sampleData.results[0]}/>);
    expect(getByText(4)).toBeInTheDocument();
    let button = getAllByText('Yes')[0];
    fireEvent.click(button);
    expect(getByText('5')).toBeInTheDocument();
    fireEvent.click(button);
    expect(getByText('5')).toBeInTheDocument();
  });
  test('opening and closing Add Answer modal window', async () => {
    const {getByText, queryByText} = render(<Question question={sampleData.results[0]}/>);
    let openModalButton = getByText('Add Answer');
    fireEvent.click(openModalButton);
    expect(getByText('Your Answer*')).toBeInTheDocument();
    let closeModalButton = getByText('X');
    fireEvent.click(closeModalButton);
    expect(queryByText('Your Answer*')).toBeNull();
  });
});

describe('AnswerList component', () => {
  test('loads and displays AnswerList component', () => {
    var answerListTree = TestRenderer.create(<AnswerList answers={sampleData.results[0].answers}/>).toJSON();
    expect(answerListTree).toMatchSnapshot();
  });
  test('clicking SEE MORE ANSWERS displays all answers and COLLAPSE ANSWERS link', () => {
    const {getAllByText, getByText} = render(<AnswerList answers={sampleData.results[1].answers} />);
    expect(getAllByText('Report').length).toBe(2);
    let button = screen.getByText('SEE MORE ANSWERS');
    fireEvent.click(button);
    expect(getAllByText('Report').length).toBe(3);
    expect(getByText('COLLAPSE ANSWERS')).toBeInTheDocument();
  });
  test('clicking COLLAPSE ANSWERS displays two answers and SEE MORE ANSWERS link', () => {
    const {getAllByText, getByText} = render(<AnswerList answers={sampleData.results[1].answers} />);
    let seeMoreButton = screen.getByText('SEE MORE ANSWERS');
    fireEvent.click(seeMoreButton);
    expect(getAllByText('Report').length).toBe(3);
    let collapseButton = screen.getByText('COLLAPSE ANSWERS');
    fireEvent.click(collapseButton);
    expect(getAllByText('Report').length).toBe(2);
    expect(getByText('SEE MORE ANSWERS')).toBeInTheDocument();
  });
});

describe('Answer component', () => {
  test('loads and displays Answer component', () => {
    var answerTree = TestRenderer.create(<Answer answer={answer}/>).toJSON();
    expect(answerTree).toMatchSnapshot();
  });
  test('click report marks answers as being reported', () => {
    const {getByText} = render(<Answer answer={answer}/>);
    let reportButton = getByText('Report');
    fireEvent.click(reportButton);
    expect(getByText('Reported')).toBeInTheDocument();
  });
});

describe('AddAnswerModal component', () => {
  test('loads and displays Answer component', () => {
    var addAnswerModalTree = TestRenderer.create(<AddAnswerModal answer={answer}/>).toJSON();
    expect(addAnswerModalTree).toMatchSnapshot();
  });
  test('opening and closing Upload Photos modal window', () => {
    const {getByText, getAllByText, queryByText} = render(<AddAnswerModal answer={answer}/>);
    let openModalButton = getByText('UPLOAD PHOTOS');
    fireEvent.click(openModalButton);
    expect(queryByText('Upload Photos for')).toBeInTheDocument();
    let closeModalButton = getAllByText('X')[1];
    fireEvent.click(closeModalButton);
    expect(queryByText('Upload Photos for')).not.toBeInTheDocument();
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
    var uploadPhotosModalTree = TestRenderer.create(<UploadPhotosModal answer={answer} photoCount={0} uploadedPhotos={[]}/>).toJSON();
    expect(uploadPhotosModalTree).toMatchSnapshot();
  });
  test('maps uploaded photos on render', () => {
    const {getByRole} = render(<UploadPhotosModal answer={answer} photoCount={1} uploadedPhotos={['photo one test']}/>);
    expect(getByRole('img')).toBeInTheDocument();
  });
});