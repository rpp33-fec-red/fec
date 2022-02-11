import React from 'react';
<<<<<<< HEAD
// import './overview.scss';

import LeftContainer from './leftContainer/leftcontainer.component.js'
import RightContainer from './rightContainer/rightcontainer.component.js'
=======
import './overview.scss';

>>>>>>> 199c0a1f1b8df9e75dc634b6aa732ba6dae047fd

class Overview extends React.Component{

  constructor(props){
    super(props)
    this.state = {
<<<<<<< HEAD
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
=======
      onProduct:{}
>>>>>>> 199c0a1f1b8df9e75dc634b6aa732ba6dae047fd
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
<<<<<<< HEAD
    return (<div className="overview">
    <LeftContainer product={this.state.onProduct}/>
    <RightContainer/>


    </div>)
=======
    return (<div className="overview"> Overview component</div>)
>>>>>>> 199c0a1f1b8df9e75dc634b6aa732ba6dae047fd
  }



}
export default Overview;