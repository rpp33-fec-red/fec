/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.js';

it('renders app correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});