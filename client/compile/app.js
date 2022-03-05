
import React from 'react';
import ReactDOM from 'react-dom';

//components
import Overview from './Overview/overview.component.js';
import RatingsWidget from './RatingsWidget/RatingsWidget.js';
import QuestionsWidget from './Questions/Questions.jsx';
import RelatedProducs from './RelatedItems/RelatedProducts.jsx';
import Model from './model.js';
var model = new Model(false);
import GetRequests from './getRequests.js';

import './style.scss';
import testData from './Overview/testProducts.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: window.location.search.split('=')[1] || 64620,
      Product:testData
    };
    this.Get = new GetRequests();
  }


  componentDidMount(){
    var id = this.state.productId;
    var that = this;
    this.Get.getProductData(id, function(data) {
      that.setState({Product:data});
    });
  }
  renderStars(){}


  render(){
    return (
      <div className="main">
        <Overview ProductData={this.state.Product} id={this.state.productId}/>
        <RelatedProducs getData={model.getData} />
        <QuestionsWidget getQuestions={model.getData} product_id="64620" product_name="Camo Onesie"/>
        <RatingsWidget getReviews={model.getData} product_id={64622}/>
      </div>);
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'));