// PROPS from RelatedProducts.jsx: 
// pass down to product card: product info, id?, functions
// should have functions: click, compare

import React from 'react';
import ProductCard from '../Cards/ProductCard.jsx';

const ProductCarousel = (props) => {

    let renderProduct = () => {
        return props.relatedProducts.map((product, i) => {
            return (
                <ProductCard 
                    key={i}
                    index={i}
                    productInfo={props.productInfo[product.id]}
                    product={product}
                />
            )
        })
    }
    return (
        <div className="relatedProductCarouselContainer">
            <div className="productCarousel">
                <div style={({
                    width: props.relatedProducts.length *400,
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