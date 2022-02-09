import React from 'react';
import axios from 'axios';

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
        // this.getOutfits = this.getOutfits.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleCompare = this.handleCompare.bind(this);
        // this.handleAddOutfit = this.handleAddOutfit.bind(this);
        // this.handleDeleteOutfit = this.handleDeleteOutfit.bind(this);
    }

    componentDidMount () {
        this.getRelatedProducts(64620, (productInfo, relatedProducts) => {
            this.setState({ productInfo, relatedProducts })
        });
        // this.getOutfits();
    }

    async getRelatedProducts (id, callback) {
        // get the current product id: productIf = props.productId 
        // make GET request GET /products/:product_id/related to get a list of related product's ids
        // make GET request to get the related products: GET /products/:product_id
        let productInfo = {};
        let relatedProducts = [];
        //use a sample product id #64620
        try {
            await axios
            .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`, {
                headers: {
                    'Authorization': `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`
                }
            })
            .then( async (res) => {
    
                let relatedProductIds = res.data;
                try {
                    for (let id of relatedProductIds) {
                        await axios
                            .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, {
                                headers: {
                                    'Authorization': `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`
                                }
                            })
                            .then((res) => {
                                relatedProducts.push(res.data);
                            });
                        await axios
                            .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, {
                                headers: {
                                    'Authorization': `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`
                                }
                            })
                            .then((res) => {
                                productInfo[res.data.product_id] = res.data.results;
                            });
                    };
                } catch (err) {
                    console.log('err @ getRelatedProducts', err);
                }
                
            });
        } catch (err) {
            console.log('err @ getRelatedProducts', err);
        }
       
        callback(productInfo, relatedProducts);
    }   

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

