import React from 'react';
// import './overview.scss';

import LeftContainer from './leftContainer/leftcontainer.component.js'
import RightContainer from './rightContainer/rightcontainer.component.js'

<<<<<<< HEAD
var Overview = function (props){





  return (<div className="overview"> Overview component</div>)
=======
class Overview extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      onProduct: {
        id: 64620,
        campus: 'hr-rpp',
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140.00',
        created_at: '2022-01-28T00:20:03.466Z',
        updated_at: '2022-01-28T00:20:03.466Z'
      }
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
>>>>>>> added test file and react test renderer



}
export default Overview;