import React from 'react';
import ReactDOM from 'react-dom';
import ClickTracker from './Click_Tracker.jsx';

//components
import Overview from './Overview/overview.component.js';
import RatingsWidget from './RatingsWidget/RatingsWidget.js';
import QuestionsWidget from './Questions/Questions.jsx';
import RelatedProducts from './RelatedItems/RelatedProducts.jsx';
import Model from './model.js';
var model = new Model();
import './style.scss';
import Header from './header.js'
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productID: window.location.search.split('=')[1] || '64620',
      product: {}
    };
  }

  componentDidMount(){
    model.getData(['products', this.state.productID, ''], (data) => {
      this.setState({product: data.results});
    });
  }

  render(){
    return (
      <ClickTracker>
        <Header></Header>
        <Overview getProducts={model.getData}  productId={this.state.productID}/>
        <RelatedProducts getData={model.getData} product_id={this.state.productID}/>
        <QuestionsWidget product_id={this.state.productID} product_name={this.state.product.name}/>
        <RatingsWidget getReviews={model.getData} product_id={this.state.productID} product_name={this.state.product.name}/>
      </ClickTracker>);
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'));