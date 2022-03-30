
import React from 'react';
function QuantiySelector(props){


  function onQtyChange(qty){
    props.clickQty(qty)
  }

  function range(qty){
    if (qty == null){
      return [];
    }
    var array=[];
    if (qty > 15){qty =15;}
    for (let i=1; i < qty; i ++){array.push(i);}
    return array;
  }

  return (
    <React.Fragment>
     <select onChange={function(e){onQtyChange(e.target.value)}} className="drop-down" name="qty" id="qty">
  {
    range(props.maxquantity).map((qty)=>{
      return <option  key={qty}>{qty}</option>;
    })
}
</select>

    </React.Fragment>
  );

}
export default QuantiySelector;