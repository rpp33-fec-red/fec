
import React from 'react';
import ReactDOM from 'react-dom';

//components
import Overview from './Overview/overview.component.js';
import RatingsWidget from './RatingsWidget/RatingsWidget.js';
import QuestionsWidget from './Questions/Questions.jsx';
import RelatedProducs from './RelatedItems/RelatedProducts.jsx';
import ClickTracker from './ClickTracker.jsx';
import Model from './model.js';
var model = new Model(false);
import './style.scss';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart:[{product_id:392932,sku:3838232}]
    };
  }

  componentDidMount(){}
  renderStars(){}

  render(){
    const QuestionsTracked = ClickTracker(QuestionsWidget, {product_id:"64620", product_name:"Camo Onesie", widget: 'qa'});
    return (
      <div className="main">
        <Overview getProducts={model.getData} id={this.state.productID}/>
        <RelatedProducs getData={model.getData} />
        <QuestionsTracked/>
        <RatingsWidget getReviews={model.getData} product_id={64620}/>
      </div>);
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'));