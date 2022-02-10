import React from 'react';
import renderer from 'react-test-renderer';
import Main from './app.js';

it('renders app correctly', () => {
  const tree = renderer
    .create(<Main/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});