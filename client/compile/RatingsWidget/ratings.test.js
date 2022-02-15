import React from 'react';
import renderer from 'react-test-renderer';
import RatingsWidget from './components/RatingsWidget.js';
import Ratings from './components/Ratings/Ratings.js';
import Reviews from './components/Reviews/Reviews.js';
import ReviewTile from './components/Reviews/ReviewTile.js';

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

describe('ReviewTile component', () => {

  test('renders correctly', () => {
    const tree = renderer
    .create(<ReviewTile/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test for convert date function

  // check that review summary is capped at 60 characters

  // test for show more button
  // test to make sure only 250 characters show by default

  // test to check if "I recommend this product shows if product is recommended"

  // test for rating helpfulness
});

