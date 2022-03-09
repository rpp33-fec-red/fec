import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';
import PropTypes from 'prop-types';

class RelatedProducts extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      current: {},
      compare: {},
      relatedProducts: [], 
      outfitIds: [],
      outfitLoaded: false,
      showModal: false
    };
    this.removeDuplicate = this.removeDuplicate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getOutfits = this.getOutfits.bind(this);
    this.handleAddToOutfit = this.handleAddToOutfit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  //all 64621 needs to be change to props.productId once params.id is passed to component
  componentDidMount () {
    this.props.getData(['products', this.props.product_id, 'related'], (data) => {
      const uniqueIds = this.removeDuplicate(data.results);
      this.setState({ relatedProducts: uniqueIds });
    });

    this.props.getData(['products',this.props.product_id, ''], (data) => {
      this.setState ({ current: data.results });
    });

    this.getOutfits();
  }

  removeDuplicate (array) {
    // eslint-disable-next-line no-undef
    return [...new Set(array)];
  }

  handleClick (e) {
    let id = e.currentTarget.className.split(' ')[2];
    this.props.getData (['products', id, 'related'], (data) => {
      const uniqueIds = this.removeDuplicate(data.results);
      this.setState({ relatedProducts: uniqueIds });
    });
    this.props.getData(['products',id, ''], (data) => {
      this.setState ({ current: data.results });
    });
  }

  handleCompare (e) {
    let id = e.target.value;
    this.props.getData (['products', id, ''], (data) => {
      this.setState({ compare: data.results });
      this.setState({ showModal: true });
    });
  }

  toggleState () {
    this.setState ({ showModal: !this.state.showModal });
  }

  getOutfits () {
    let outfitIds = JSON.parse(localStorage.getItem("outfit"));
    if (outfitIds) {
      this.setState({ outfitIds: outfitIds});
      this.setState({ outfitLoaded: true });
    }
  }

  handleAddToOutfit () {
    let currentOutfit = this.state.outfitIds.slice();
    console.log('currentOutfit', currentOutfit);
    if (currentOutfit.indexOf(this.state.current.id) === -1 && this.state.current.id !== null) {
      this.setState({ outfitLoaded: false }, () => {
        currentOutfit.unshift(this.state.current.id);
        this.setState({ outfitIds: currentOutfit }, () => {
          localStorage.setItem("outfit", JSON.stringify(currentOutfit));
          this.getOutfits();
        });
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
        {this.state.showModal
          ? (<ComparisonModal 
            current={this.state.current}
            compare={this.state.compare}
            show={this.state.showModal}
            onClose={ this.toggleState }
          />)
          : (<div></div>)
        }
        <ProductCarousel
          relatedProducts={this.state.relatedProducts}
          getData={this.props.getData}
          handleClick={this.handleClick}
          handleCompare={this.handleCompare}
        />
        <br></br>
        <h2>Your Outfit</h2>
        <OutfitCarousel
          outfit_Ids={this.state.outfitIds}
          getData={this.props.getData}
          outfitLoaded={this.state.outfitLoaded}
          handleAddToOutfit={this.handleAddToOutfit}
          handleDelete={this.handleDelete}
        />
        <br></br>

      </div>
    );
  }
}


RelatedProducts.propTypes = {
  getData: PropTypes.any,
  product_id: PropTypes.any
};

export default RelatedProducts;