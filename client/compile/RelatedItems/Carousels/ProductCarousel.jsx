// PROPS from RelatedProducts.jsx: 
// pass down to product card: product info, id?, functions
// should have functions: click, compare

import React from 'react';
import ProductCard from '../Cards/ProductCard.jsx';

const ProductCarousel = (props) => {

    let renderProduct = () => {
        return props.relatedProducts.map((product) => {
            return (
                <ProductCard 
                    key={product.id}
                    productInfo={props.productInfo}
                    product={product}
                />
            )
        })
    }
    return (
        <div className="relatedProductCarouselContainer">
            <div className="productCarousel">
                <div style={({
                    width: props.relatedProducts.length *300,
                    display: 'flex',
                    justifyContent: 'left'
                })}>
                    {renderProduct()}
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;