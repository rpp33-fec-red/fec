import TestRenderer from 'react-test-renderer';
import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';

test ('Related Products Component renders initially', () => {
    const testRenderer = TestRenderer.create(<RelatedProducts />);
    expect (testRenderer.toJSON()).toMatchSnapshot();
});

test ('Related Products Component should have a child Product Coarousel with an object prop', () => {
    const testRenderer = TestRenderer.create(<RelatedProducts />);
    const testInstance = testRenderer.root;

    expect (typeof testInstance.findByType(ProductCarousel).props.productInfo).toBe('object');
});
