import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';


class RelatedProducts extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            current: { id: this.props.productID || 64621 },
            relatedProducts: [], // to keep track of products on higher level
            outfitIds: [],
            outfitLoaded: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.getRelatedProducts = this.getRelatedProducts.bind(this);
        this.getOutfits = this.getOutfits.bind(this);
        this.handleAddToOutfit = this.handleAddToOutfit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    //all 64621 needs to be change to props.productId once params.id is passed to component
    componentDidMount () {
        this.getRelatedProducts (64620, (relatedProducts) => {
            this.setState({ relatedProducts }); 
        });
        // this.props.getData(`products/64621`, {}, (data) => {
        //     this.setState ({ current: data.results });
        //     console.log('current', this.state.current);
        // });
        this.getOutfits();
    }

    handleClick (e) {
        let id = e.currentTarget.className.split(' ')[1];
        this.getRelatedProducts (id, (relatedProducts) => {
            this.setState({ relatedProducts }); 
        });
    }

    getRelatedProducts (id, callback) {     
        this.props.getData(`products/${id}/related`, {}, (data) => {
            callback(data.results);
        });
    }   

    getOutfits () {
        // let outfitIds = JSON.parse(localStorage.getItem("outfit")); 
        let outfitIds = [64622]; //hardcode in to check for Outfitrender 
        if (!!outfitIds) {
            this.setState({ outfitIds: outfitIds});
        }

    }

    handleAddToOutfit () {
        let currentOutfit = this.state.outfitIds.slice();
        if (currentOutfit.indexOf(this.state.current.id) === -1 && this.state.current.id !== null) {
            this.setState({ outfitLoaded: false });
            currentOutfit.unshift(this.state.current.id);
            this.setState({ outfitIds: currentOutfit }, () => {
                localStorage.setItem("outfit", JSON.stringify(currentOutfit));
                this.getOutfits();
            });
        }
    }

    handleDelete (e) {
        let id = Number(e.target.value);
        let storage = this.state.outfitIds.slice();
        let index = storage.indexOf(id);
        storage.splice(index, 1);
        localStorage.setItem("outfit", JSON.stringify(storage));
        this.getOutfits();
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
                    handleClick={this.handleClick}
                />
                <br></br>
                <h2>Your Outfit</h2>
                <OutfitCarousel 
                    outfit_Ids={this.state.outfitIds}
                    getData={this.props.getData}
                    outfitLoaded={this.state.outfitLoaded}
                    handleAddToOutfit={this.props.handleAddToOutfit}
                    handleDelete={this.props.handleDelete}
                />
                <br></br>
          
            </div>
        );
    }
}

export default RelatedProducts;

