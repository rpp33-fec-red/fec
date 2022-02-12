import React from 'react';

import LeftContainer from './leftContainer/leftcontainer.component.js'
import RightContainer from './rightContainer/rightcontainer.component.js'
import './overview.scss';


class Overview extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      onProduct:{}
    }
    this.getData= this.getData.bind(this)
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    var that = this;
    this.props.getProducts('products',{},function(data){
      console.log(data)
      that.setState({onProduct:data.results[0]})
      console.log(that.state)
    })
  }


  render (){
    return (<div className="overview">
    <LeftContainer product={this.state.onProduct}/>
    <RightContainer/>

    </div>)
  }



}
export default Overview;