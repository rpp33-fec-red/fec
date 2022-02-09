
import React from 'react'
import ReactDOM from 'react-dom';

 //components
 import Overview from './Overview/overview.component.js'
 import Ratings from './Ratings/ratings.component.js'
 import Questions from './Questions/questions.component.js'
 import RelatedProducs from './Relateditems/RelatedProducts.jsx'

 //core css
 import './style.scss'
class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      //api data
    }
  }

  getData() {

    //api request
    // update state
  }

  render(){
    return (<div className="main">

      <Overview/>

      <RelatedProducs/>
      <Questions/>
      <Ratings/>
  </div>)
  }


}


function app(){

  return (
    <Main></Main>
  )

}

ReactDOM.render(app(),document.getElementById('app'))