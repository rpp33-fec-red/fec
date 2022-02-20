import React from 'react';
import ProductCard from '../Cards/ProductCard.jsx';
import '../relatedItems.scss';

const ProductCarousel = (props) => {

    return (
        <div className="relatedProductCarouselContainer">
            <div className="productCarousel">
                <div style={({
                    width: props.relatedProducts.length *500,
                    display: 'flex',
                    justifyContent: 'left',
                    padding: '2rem'
                })}>
                    { props.relatedProducts.map((id) => {
                        return (
                            <ProductCard 
                                key={id}
                                product_id={id}
                                getData={props.getData}
                                handleClick={props.handleClick}
                            /> 
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;
