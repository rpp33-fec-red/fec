/* eslint-disable no-undef */
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';


import Model from '../model.js';
import { instance } from 'eslint-plugin-react/lib/util/lifecycleMethods';
var model = new Model(false);
var getData = () => {model.getData;};

describe ('RelatedProducts Component', () => {
  beforeEach (() => {
    const testRenderer = TestRenderer.create(<RelatedProducts getData={getData}/>);
    const instance = testRenderer.getInstance();
  });
//   test ('RelatedProducts component should render correctly', () => {
//     expect(testRenderer.toJSON()).toMatchSnapshot();
//   });
//   test ('RelatedProduct should have a props that is a function', () => {
//     expect(typeof instance.props.getData).toBe('function');
//   });
});


