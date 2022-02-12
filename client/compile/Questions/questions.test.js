import React from 'react';
import TestRenderer from 'react-test-renderer';
import Questions from './Questions.jsx';
import searchBarTree from './subcomponents/SearchBar.jsx';
import QuestionsList from './subcomponents/QuestionsList.jsx';

//https://jestjs.io/docs/getting-started

describe('Questions widget component', () => {
  test('loads and displays questions widget comoponent', () => {
    var questionsTree = TestRenderer.create(<Questions />).toJSON();

    expect(questionsTree).toMatchSnapshot();
  });
});

describe('SearchBar component', () => {
  test('loads and displays searcbBar comoponent', () => {
    var searchBarTree = TestRenderer.create(<SearchBar />).toJSON();

    expect(searchBarTree).toMatchSnapshot();
  });
});

describe('QuestionsList component', () => {
  test('loads and displays searcbBar comoponent', () => {
    var questionsListTree = TestRenderer.create(<QuestionsList />).toJSON();

    expect(questionsListTree).toMatchSnapshot();
  });
});
