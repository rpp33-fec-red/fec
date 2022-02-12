import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';


// ** PROPS need from main app: current product id **

class RelatedProducts extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            relatedProducts: [] // to keep track of products on higher level
        }
        this.getRelatedProducts = this.getRelatedProducts.bind(this);
    
    }

    componentDidMount () {
        this.getRelatedProducts (64621, (relatedProducts) => {
            this.setState({ relatedProducts }); 
        });
        // this.getOutfits();
    }

    getRelatedProducts (id, callback) {     
        this.props.getData(`products/${id}/related`, {}, (data) => {
            callback(data.results);
        });
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
                    relatedProducts={this.state.relatedProducts}
                    getData={this.props.getData}
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

