
import React from 'react'
import ReactDOM from 'react-dom';

 //components
 import Overview from './Overview/overview.component.js'
 import Ratings from './Ratings/ratings.component.js'
<<<<<<< HEAD
 import Questions from './Questions/questions.component.js'
 import RelatedProducs from './RelatedItems/RelatedProducts.jsx'

=======
 import QuestionsWidget from './Questions/Questions.jsx';
 import RelatedItems from './RelatedItems/relatedItems.component.js'
import Model from './model.js';
var model = new Model(false);
console.log(model)
>>>>>>> origin/master
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

      <Overview getProducts={model.getData}/>

<<<<<<< HEAD
      <RelatedProducs />
      <Questions/>
=======
      <RelatedItems/>
      <QuestionsWidget />
>>>>>>> origin/master
      <Ratings/>
  </div>)
  }


}


ReactDOM.render(<Main></Main>,document.getElementById('app'))