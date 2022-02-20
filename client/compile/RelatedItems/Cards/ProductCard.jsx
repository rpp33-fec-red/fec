import React from 'react';
import '../relatedItems.scss';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      photo: `https://i.pinimg.com/originals/2d/38/62/2d3862abf214ecdb6a1c231e035c1796.jpg`,
      category: 'Pug',
      product_name: '',
      default_price: '$$$',
    };
    this.getCardInfo = this.getCardInfo.bind(this);
  }

  componentDidMount () {
    this.getCardInfo(this.props.product_id);
  }

  getCardInfo (id) {

    this.props.getData(['products', id, ''], (data) => {
      this.setState ({
        category: data.results.category,
        product_name: data.results.name,
        default_price: data.results.default_price
      });
    });

    this.props.getData(['products', id, 'styles'], (data) => {
      this.setState({
        photo: data.results.results[0]['photos'][0]['thumbnail_url']
      });
    });
  }

  render () {
    return (
      <div className="productCard">
        <button
          id = "compareButton"
          value = {this.props.product_id}
          onClick = {this.props.handleCompare}
        >*</button>
        <img src={this.state.photo} className="image" />
        <p className="category" >{this.state.category}</p>
        <h4
          className={`cardtitle ${this.props.product_id}`}
          onClick={this.props.handleClick}
          // href={`/products/${this.props.product_id}`}
          //comment href out because page /products/:id doesn't exist yet
        ><b>{this.state.product_name}</b></h4>
        <p className="default-price" >$ {this.state.default_price}</p>

      </div>
    );
  }
}

ProductCard.propTypes = {
  getData: PropTypes.any,
  product_id: PropTypes.any,
  handleClick: PropTypes.any,
  handleCompare: PropTypes.any
};
  
export default ProductCard;