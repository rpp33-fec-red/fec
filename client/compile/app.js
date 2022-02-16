
import React from 'react'
import ReactDOM from 'react-dom';

 //components
 import Overview from './Overview/overview.component.js'
 import Ratings from './Ratings/ratings.component.js'
 import QuestionsWidget from './Questions/Questions.jsx';
 import RelatedItems from './RelatedItems/relatedItems.component.js'
import Model from './model.js';
var model = new Model(false);
 //core css

 import './style.scss'
class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // ProductId: from url query param
    }
  }

  componentDidMount(){

  }

    renderStars(count){

    }

  render(){
    return (
    <div className="main">

      <Overview getProducts={model.getData} id={this.state.productID}/>
      <RelatedItems getRelatedItems={model.getData} />
      <QuestionsWidget />
      <Ratings/>
  </div>
  )
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'))