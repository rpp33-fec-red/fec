/* eslint-disable react/react-in-jsx-scope */
import StarsComponent from '../../showStars';
import '../relatedItems.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-undef
class ProductCard extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      photo: `https://i.pinimg.com/originals/2d/38/62/2d3862abf214ecdb6a1c231e035c1796.jpg`,
      category: 'Pug',
      product_name: '',
      default_price: '$$$',
      sale_price: null,
      original_price: '$$'
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
        photo: data.results.results[0]['photos'][0]['thumbnail_url'],
        original_price: data.results.results[0]['original_price'],
        sale_price: parseInt(data.results.results[0]['sale_price'])
      });
    });
  }

  render () {
    return (
      <div className={`productCard ${this.props.product_id}`}>
        <button
          id = "compareButton"
          value = {this.props.product_id}
          onClick = {this.props.handleCompare}
        >*</button>
        <a href={`/?productid=${this.props.product_id}`} style={{"text-decoration":"none", "color":"black"}}>
          <img src={this.state.photo} alt="Photo" className="productImage" />
          <p className="product_category" >{this.state.category}</p>
          <p className='product_cardtitle'>{this.state.product_name}</p>
          <p className="product_default_price">
            { !this.state.sale_price
              ? (`$ ${this.state.default_price}`)
              : (<span><span className='product_original_price'>$ {this.state.original_price}</span><b><span className='product_sale_price'>  $ {this.state.sale_price}</span></b></span>)
            }</p>
          <StarsComponent product_id={this.props.product_id} />
        </a>
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