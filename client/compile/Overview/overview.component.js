import React from 'react';
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
    return (<div className="overview"> Overview component</div>)
  }



}
export default Overview;