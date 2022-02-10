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

it('Reviews component renders correctly', () => {
  const tree = renderer
  .create(<Reviews/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});