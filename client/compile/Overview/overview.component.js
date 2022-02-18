import React from 'react';

import LeftContainer from './leftContainer/leftcontainer.component.js'
import RightContainer from './rightContainer/rightcontainer.component.js'
import './overview.scss';


<<<<<<< HEAD
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
=======
class Overview extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                onProduct: {},
                onStyle: {}
            }
            this.getData = this.getData.bind(this);
        }

        componentDidMount() {
            this.getData();
        }

        getData() {
            var that = this;
            this.props.getProducts(['products', 64620, 'styles'], function(data) {
                that.setState({ onProduct: data.results });
                if ( data){
                    console.log(data.results)
                    that.setState({ onStyle: data.results.results[0] });

                }
            })
        }


        render() {
            return (
            < div className = "overview" >
                <LeftContainer onStyle = { this.state.onStyle }/>
                <RightContainer/>
            </div>)
            }
>>>>>>> 36c4c44a4740a74423f6e3d417d5e6fef80344ff



        }
        export default Overview;