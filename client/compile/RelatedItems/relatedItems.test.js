import TestRenderer from 'react-test-renderer';
import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';

import Model from '../model.js';
var model = new Model(false);
var getData = () => {model.getData};

test ('Related Products Component renders initially', () => {
    const testRenderer = TestRenderer.create(<RelatedProducts getData={getData}/>);
    expect (testRenderer.toJSON()).toMatchSnapshot();
});


