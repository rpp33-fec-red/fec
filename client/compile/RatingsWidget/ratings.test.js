import React from 'react';
import renderer from 'react-test-renderer';
import RatingsWidget from './components/RatingsWidget.js';
import Ratings from './components/Ratings/Ratings.js';
import Reviews from './components/Reviews/Reviews.js';

describe('Components render correctly', () => {

  test('main ratings and reviews widget renders correctly', () => {
    const tree = renderer
    .create(<RatingsWidget/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('main reviews widget renders correctly', () => {
    const tree = renderer
    .create(<Reviews/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('main ratings widget renders correctly', () => {
    const tree = renderer
    .create(<Ratings/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

});