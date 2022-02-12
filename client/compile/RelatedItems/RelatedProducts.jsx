import React from 'react';

import ComparisonModal from './ComparisonModal.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';


// ** PROPS need from main app: current product id **

class RelatedProducts extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            current: {},
            relatedProducts: [], // to keep track of products on higher level
            productInfo: {}, // to keep tract of product details, photo, styles
            outfitId: [],
            outfitInfo: {},
            outfitLoaded: false,
            showComparison: false,
            addedOutfit: false
        }
        this.getRelatedProducts = this.getRelatedProducts.bind(this);
    
    }



    componentDidMount () {
        this.getRelatedProducts (64620);
        // this.getOutfits();
    }

    getRelatedProducts (id) {
        
        let productInfo = {};
        let relatedProducts = [];
        this.props.getData(`products/${id}/related`, {}, async (data) => {
            let relatedProductIDs = data.results;
            for await (let id of relatedProductIDs) {
                this.props.getData(`products/${id}`, {}, (data) => {
                    relatedProducts.push(data.results);
                });
                this.props.getData(`products/${id}/styles`, {}, (data) => {
                    productInfo[data.results.product_id] = data.results.results;
                });
            };
            this.setState({ productInfo, relatedProducts });      
        })
        
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
                <ProductCarousel 
                    productInfo={this.state.productInfo}
                    relatedProducts={this.state.relatedProducts}
                />
                <br></br>
                <h2>Your Outfit</h2>
                <OutfitCarousel />
                <br></br>
          
            </div>
        );
    }
}

export default RelatedProducts;

    // this.getOutfits = this.getOutfits.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleCompare = this.handleCompare.bind(this);
    // this.handleAddOutfit = this.handleAddOutfit.bind(this);
    // this.handleDeleteOutfit = this.handleDeleteOutfit.bind(this);

    // getOutfits () {
        
    // }

    // handleClick (e) {

    // }

    // handleCompare (e) {

    // }

    // handleAddOutfit () {

    // }

    // handleDeleteOutfit (e) {

    // }