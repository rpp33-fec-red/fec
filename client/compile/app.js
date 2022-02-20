
import React from 'react';
import ReactDOM from 'react-dom';

//components
import Overview from './Overview/overview.component.js';
import RatingsWidget from './RatingsWidget/components/RatingsWidget.js';
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
<<<<<<< HEAD
    };
  }

  componentDidMount(){}
=======
      // products:
    };
  }

  componentDidMount(){

  }
>>>>>>> 4a8c0f4bfdf84b43441e439f8ef7032ec1c93227
  renderStars(){}

  render(){
    return (
      <div className="main">
        <Overview getProducts={model.getData} id={this.state.productID}/>
        <RelatedProducs getData={model.getData} />
        <QuestionsWidget />
        <RatingsWidget/>
      </div>);
  }
}


ReactDOM.render(<Main></Main>,document.getElementById('app'));