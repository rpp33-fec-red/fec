
import React from 'react';
import PropTypes from 'prop-types';
import Checkmark from '../icons/checkmark.js';
class StyleSelector extends React.Component {
//picks a certain style and shows all images for that style
//if props.showImages
//if props.showStyles

  constructor(props){
    super(props);
    this.state = {
      expanded:false,
      expandedStyles:{'transform':'rotate(0deg)'},
      clickedIndex:0
    };
    this.expand = this.expand.bind(this);
    this.showStyles = this.showStyles.bind(this);
  }

  showStyles(){
    var that = this;
    function clickchangeStyle(e){
      that.setState({clickedIndex:this.index});
      that.props.changeStyle(that.state.clickedIndex);
    }

    return (
      <div className="grid-ct">
        { this.props.styles.map(function(style,index){
          if (that.state.clickedIndex === index){
            return <div className="style" style={{border:"2px solid red", borderRadius:"55px"}} onClick={clickchangeStyle.bind({index:index})} key={style.style_id}> <Checkmark ></Checkmark><img src={style.photos[0].thumbnail_url}></img></div>;
          } else {
            return <div className="style" style={{border:"2px solid transparent"}} onClick={clickchangeStyle.bind({index:index})} key={style.style_id}> <img src={style.photos[0].thumbnail_url}></img></div>;

          }
        })
        }
      </div>);
  }

  expand(){
    var newexpanded = !this.state.expanded;
    this.setState({expanded:newexpanded}, () => {
      var transform;
      if (this.state.expanded){
        transform = {'transform':'rotate(270deg)'};
      } else {
        transform = {'transform':'rotate(0deg)'};
      }
      this.setState({expandedStyles: transform },()=>{
      });
    });
  }

  showImages() {
    var that = this;
    function click(){
      that.props.imageClick(this.index);
    }
    function Modal(){
      return that.props.photos.map((photo, index)=>{
          return (<div className="box" key={index}>
            <img onClick={click.bind({index:index})} className={that.state.clickedIndex === index ? "thumb-border" : ""}  src={photo.thumbnail_url} ></img>
          </div>);


      });
    }
    return (
      <div className="imageSelector">
        <div className="box" onClick={this.expand}> <svg className="arrow" style={this.state.expandedStyles} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></div>
        { this.state.expanded ? <Modal /> : null }
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



}

StyleSelector.propTypes = {
  url: PropTypes.any,
};

export default StyleSelector;