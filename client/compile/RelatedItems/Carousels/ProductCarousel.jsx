import React from 'react';
import ProductCard from '../Cards/ProductCard.jsx';
import '../relatedItems.scss';

const ProductCarousel = (props) => {

    return (
        <div className="relatedProductCarouselContainer">
            <div className="productCarousel">
                <div style={({
                    width: props.relatedProducts.length *400,
                    display: 'flex',
                    justifyContent: 'left'
                })}>
                    { props.relatedProducts.map((id) => {
                        return (
                            <ProductCard 
                                key={id}
                                product_id={id}
                                getData={props.getData}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;
