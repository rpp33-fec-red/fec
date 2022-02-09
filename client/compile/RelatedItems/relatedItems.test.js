import TestRenderer from 'react-test-renderer';
import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';

test ('Related Products Components', () => {
    const testRenderer = TestRenderer.create(<RelatedProducts />);
    const testInstance = testRenderer.root;
    expect (testInstance.findByType(ProductCarousel).props.foo).toBe('bar');
});