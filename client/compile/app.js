import React from 'react';
import ReactDOM from 'react-dom';
import ClickTracker from './Click_Tracker.jsx';

//components
import Overview from './Overview/overview.component.js';
import RatingsWidget from './RatingsWidget/RatingsWidget.js';
import QuestionsWidget from './Questions/Questions.jsx';
import RelatedProducs from './RelatedItems/RelatedProducts.jsx';
import Model from './model.js';
var model = new Model(false);
import './style.scss';
import Header from './header.js'
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productID: window.location.search.split('=')[1] || '64620',
      product: {},
      cart:[{sku:2933939}]
    };
    this.updateCart = this.updateCart.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

  componentDidMount(){
    model.getData(['products', this.state.productID, ''], (data) => {
      this.setState({product: data.results});
    });
  }
  updateCart(cartdata){
    this.setState({cart:cartdata});
  }
  addToCart(data){
    this.state.cart.push(data);
    this.setState({cart:this.state.cart});
  }

  render(){
    return (
      <ClickTracker>
        <Header cartlength={this.state.cart.length}></Header>
        <Overview addToCart={this.addToCart} updateCart={this.updateCart} getProducts={model.getData}  productId={this.state.productID}/>
        <RelatedProducs getData={model.getData} product_id={this.state.productID}/>
        <QuestionsWidget product_id={this.state.productID} product_name={this.state.product.name}/>
        <RatingsWidget getReviews={model.getData} product_id={this.state.productID} product_name={this.state.product.name}/>
      </ClickTracker>);
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'));