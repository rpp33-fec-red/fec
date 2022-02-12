
import React from 'react'
import ReactDOM from 'react-dom';

 //components
 import Overview from './Overview/overview.component.js'
 import Ratings from './Ratings/ratings.component.js'
 import QuestionsWidget from './Questions/Questions.jsx';
 import RelatedProducs from './RelatedItems/RelatedProducts.jsx'

import Model from './model.js';
var model = new Model(false);
// console.log(model)
 //core css

 import './style.scss'
class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(){

  }



  render(){
    return (<div className="main">

      {/* <Overview getProducts={model.getData}/> */}
      <RelatedProducs getData={model.getData}/>
      {/* <QuestionsWidget />
      <Ratings/> */}
  </div>)
  }


}


ReactDOM.render(<Main></Main>,document.getElementById('app'))