import React from 'react';
import axios from 'axios';

import ComparisonModal from './ComparisonModal';
import ProductCarousel from './Carousels/ProductCarousel';
import OutfitCarousel from './Carousels/OutfitCarousel';


// ** PROPS need from main app: current product id **

class RelatedProducts extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            current: {},
            relatedProducts: [],
            productInfo: {},
            outfitId: [],
            outfitInfo: {},
            outfitLoaded: false,
            showComparison: false,
            addedOutfit: false
        }
        this.getRelatedProducts = this.getRelatedProducts.bind(this);
        this.getOutfits = this.getOutfits.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCompare = this.handleCompare.bind(this);
        this.handleAddOutfit = this.handleAddOutfit.bind(this);
        this.handleDeleteOutfit = this.handleDeleteOutfit.bind(this);
    }

    componentDidMount () {
        this.getRelatedProducts();
        this.getOutfits();
    }

    getRelatedProducts () {
        // get the current product id: productIf = props.productId 
        // make GET request GET /products/:product_id/related to get a list of related product's ids
        // make GET request to get the related products: GET /products/:product_id
    }

    getOutfits () {
        
    }

    handleClick (e) {

    }

    handleCompare (e) {

    }

    handleAddOutfit () {

    }

    handleDeleteOutfit (e) {

    }

    render () {
        return (
            <div className='relatedProducts'>
                <br></br>
                <h2>Related Products</h2>
                {this.state.showComparison 
                ? <ComparisonModal />
                : <div></div>
                }
                <ProductCarousel />
                <br></br>
                <h2>Your Outfit</h2>
                <OutfitCarousel />
                <br></br>
            </div>
        );
    }
}

export default RelatedProducts;

module.exports.sum = (a, b) => { return a + b; }