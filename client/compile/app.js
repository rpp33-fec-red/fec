
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
      // ProductId: from url query param
      // products:
    };
  }

  componentDidMount(){
    model.postData({path:'qa/questions',params:{product_id:64620}},{body:'this is a message',name:'grant',email:'soundbreakr1@gmail.com',product_id:64620},function(data){
      console.log('data',data);
    });
    model.getData({path:'qa/questions',params:{product_id:64620}},function(data){
      console.log('data',data);
    });
  }
  renderStars(){}

  render(){
    return (
      <div className="main">
        <Overview getProducts={model.getData} id={this.state.productID}/>
        <RelatedProducs getData={model.getData} />
        <QuestionsWidget getQuestions={model.getData} product_id="64620" product_name="Camo Onesie"/>
        <RatingsWidget/>
      </div>);
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'));