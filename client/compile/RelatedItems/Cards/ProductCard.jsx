import React from 'react';

const ProductCard = (props) => {
    
    console.log('props@Productcard', props);

    let photo = props.productInfo[0]['photos'][0].thumbnail_url;
 
    return (
        <div className="productCard" style={{
            boxShadow : `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
            img: { display: 'block' },
            width: '15rem',
            height: '26rem',
            marginRight: '2rem'
        }}>
            <img src={photo} style={{ width: '13rem', height:'16rem', padding: '1rem'}}/>
            <p className="category" style={{paddingLeft: '1rem'}}>{props.product.category}</p>
            <h4 className="name" style={{paddingLeft: '1rem'}}><b>{props.product.name}</b></h4>
            <p className="default-price" style={{paddingLeft: '1rem'}}>$ {props.product.default_price}</p>
       
        </div>
    )
}

export default ProductCard;