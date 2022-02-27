
import React from 'react';
import PropTypes from 'prop-types';

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
    this.showStyles = this.showStyles.bind(this);
  }




  showStyles(){
    var that = this;
    function clickchangeStyle(){
      that.props.changeStyle(this.index);
    };

    return (
      <div className="grid-ct">
        { this.props.styles.map(function(style,index){
          return <div className="style"  onClick={clickchangeStyle.bind({index:index})} key={style.style_id}> <img src={style.photos[0].thumbnail_url}></img></div>;
        })
        }
      </div>);
  }

  expand(){
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



  showImages() {
    var that = this;

    function Modal(){
      return that.props.photos.map((photo, index)=>{
        return (<div className="box" key={index}>
          <img onClick={that.props.imageClick.bind({index:index})} src={photo.thumbnail_url} ></img>
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