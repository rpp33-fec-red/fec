
import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

var StyleSelector = function (props) {

  console.log('url',props.url);
  return (
    <div className="styleSelector">
    </div>);


};
=======

class StyleSelector extends React.Component {
//picks a certain style and shows all images for that style
//if props.showImages
//if props.showStyles

  constructor(props){
    super(props);

    this.state = {
      imageSelected:null,
      styleSelected:null,
      expanded:false,
      expandedStyles:{'transform':'rotate(0deg)'}
    };
    this.expand = this.expand.bind(this);

  }
  styleClicked() {

  }
  imageClicked(){

  }

  showStyles(){
    return (
      <div className="styleSelector">

      </div>);
  }

  expand(){
    //expand modal
    //change state
    //expanded true
    var newexpanded = !this.state.expanded;
    this.setState({expanded:newexpanded}, () => {
      var answer;
      if (this.state.expanded){
        answer = {'transform':'rotate(270deg)'};
      } else {
        answer = {'transform':'rotate(0deg)'};
      }
      this.setState({expandedStyles: answer },()=>{
        console.log(this.state);
      });

    });


  }

  imageClick(){

  }

  showImages() {
    return (
      <div className="imageSelector">
        {/* change style from using rows to having grid display diffrent hide imagesin each rows and expand to the right make width 800px; */}
        <div className="row">
          <div className="row" onClick={this.expand}> <svg className="arrow" style={this.state.expandedStyles} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div>
          <div className="modal" style={{"display":"none"}}>
          {this.props.images.map((photo, index)=>{
          if (index < 3){
            return (<div className="row" key={index}>
              <img src={photo.url} ></img>
            </div>);
          }
        })}
          </div>

        </div>


      </div>);
  }

  render(){
    if (this.props.showImages !== undefined){
      return this.showImages();
    }
    if (this.props.showStyles !== undefined){
      return this.showStyles();
    }
  }

>>>>>>> 37a40a20c8dee18c563fcc2ee60389b1cae99088

StyleSelector.propTypes = {
  url: PropTypes.any,
};

<<<<<<< HEAD
=======
}

StyleSelector.propTypes = {
  url: PropTypes.any,
};

>>>>>>> 37a40a20c8dee18c563fcc2ee60389b1cae99088
export default StyleSelector;