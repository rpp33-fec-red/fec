import React from 'react';
import ProductCard from '../Cards/ProductCard.jsx';
import '../relatedItems.scss';

const ProductCarousel = (props) => {

    let renderProduct = () => {
        let productsList = props.relatedProducts;
     
        return (productsList.length === 0) ? (<div>Empty here</div>) : ( 
            productsList.map((product, i) => {
                console.log('product in render product map', product);
                return (
                    <ProductCard
                        key={i}
                        productInfo={props.productInfo[product.id]}
                        product={product} />
                );
            })
        ); 
     
    }

    return (
        <div className="relatedProductCarouselContainer">
            <div className="productCarousel">
                <div style={({
                    width: props.relatedProducts.length *400,
                    display: 'flex',
                    justifyContent: 'left'
                })}>
                    { renderProduct() }
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;
