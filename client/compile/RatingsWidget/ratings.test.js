import React from 'react';
import renderer from 'react-test-renderer';
import RatingsWidget from './components/RatingsWidget.js';
import Reviews from './components/Reviews/Reviews.js'

it('RatingsWidget component renders correctly', () => {
  const tree = renderer
  .create(<RatingsWidget/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Ratings component renders correctly', () => {
  const tree = renderer
  .create(<Ratings/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});