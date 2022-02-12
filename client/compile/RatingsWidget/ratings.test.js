import React from 'react';
import renderer from 'react-test-renderer';
import RatingsWidget from './components/RatingsWidget.js';

it('Ratings widget renders correctly', () => {
  const tree = renderer
  .create(<RatingsWidget/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});