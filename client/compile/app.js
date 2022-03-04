
import React from 'react';
import ReactDOM from 'react-dom';

//components
import Overview from './Overview/overview.component.js';
import RatingsWidget from './RatingsWidget/RatingsWidget.js';
import QuestionsWidget from './Questions/Questions.jsx';
import RelatedProducs from './RelatedItems/RelatedProducts.jsx';
import Model from './model.js';
var model = new Model(false);
import './style.scss';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productID: window.location.search.split('=')[1] || '64621',
      product: {},
      cart:[{product_id:392932,sku:3838232}]
    };
  }
  
  componentDidMount(){
    model.getData(['products', this.state.productID, ''], (data) => {
      this.setState({product: data.results});
    });
  }
  renderStars(){}

  render(){
    return (
      <div className="main">
        <Overview getProducts={model.getData} id={this.state.productID}/>
        <RelatedProducs getData={model.getData} product_id={this.state.productID}/>
        <QuestionsWidget getQuestions={model.getData} product_id="64620" product_name="Camo Onesie"/>
        <RatingsWidget getReviews={model.getData} product_id={64622}/>
      </div>);
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'));