import React from 'react'
import ReactDOM from 'react-dom';

 //components
 import Overview from './Overview/overview.component.js';
 import RatingsWidget from './RatingsWidget/components/RatingsWidget.js';
 import QuestionsWidget from './Questions/Questions.jsx';
 import RelatedItems from './RelatedItems/relatedItems.component.js';
 import Model from './model.js';
 var model = new Model(false);
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
    return (
    <div className="main">
      <Overview getProducts={model.getData}/>
      <RelatedItems/>
      <QuestionsWidget />
      <RatingsWidget/>
    </div>
    );
  }
}

export default Main;
