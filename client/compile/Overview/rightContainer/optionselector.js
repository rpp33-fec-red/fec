import React from 'react';
function OptionSelector(props){
  var clickonsku = (skuid)=>{

    var sku= props.styles[props.styleIndex].skus[skuid];
    if (sku === undefined){
      props.clickSku(null);
    } else {
      props.clickSku(skuid,sku.quantity);
    }
  };
  var options = ()=>{
    var option = (<option key={0}>Select size</option>);
    var style= props.styles[props.styleIndex];
    var keys = Object.keys(style.skus);
    var sizes = keys.map((key,index)=>{
      var obj = style.skus[key];

      return (<option value={key} key={index+1}>{obj.size}</option>);
    });
    sizes.unshift(option);

    if (sizes.length > 1){
      return sizes;
    } else {
      return <option>OUT OF STOCK</option>;
    }
  };

  return (
    <React.Fragment>
      <label htmlFor="styles">Choose a style_id:</label>
      <select onChange={function(e){clickonsku(e.target.value)}} className="drop-down sku-dropdown" name="styles" id="styles">
        {
          options()
        }
      </select>
    </React.Fragment>
  );

}
export default OptionSelector;