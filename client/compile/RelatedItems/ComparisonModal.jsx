
   
/* eslint-disable no-prototype-builtins */
import React from 'react';
import './relatedItems.scss';
import PropTypes from 'prop-types';

const ComparisonModal = (props) => {
  let currentName = props.current.name;
  let compareName = props.compare.name;
  let currentFeatures = props.current.features; //ex: [{"feature": "Sole", "value": "Rubber"}, {}, {}]
  let compareFeatures = props.compare.features;

  let totalfeatures = [];
  let current = {};
  let compare = {};

  for (let feature of currentFeatures) {
    if (totalfeatures.indexOf(feature.feature) === -1) {
      totalfeatures.push(feature.feature);
      current[feature.feature] = feature.value;
      let index = compareFeatures.indexOf(feature.feature);
      if (index > -1) {
        compare[feature.feature] = compareFeatures[index].value;
      }
    }
  }
  if (compareFeatures) {
    for (let feature of compareFeatures) {
      if (totalfeatures.indexOf(feature.feature) === -1) {
        totalfeatures.push(feature.feature);
        compare[feature.feature] = feature.value;
      }
    }
  }
 
  const showHideModel = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideModel}>
      <section className='modal-main'>
        <div className='compare-row'>
          <div className='rowTitle current-col'>{currentName}</div>
          <div className='rowTitle feature'>Features</div>
          <div className='rowTitle compare-col'>{compareName}</div>
        </div>
        
        {totalfeatures.map((feature, i) => {
          let currentRow = null;
          let compareRow = null;
          if (current && current.hasOwnProperty(feature)) {
            currentRow = current[feature];
          } else {
            currentRow = 'n/a';
          }
          if (compare && compare.hasOwnProperty(feature)) {
            compareRow = compare[feature];
          } else {
            compareRow = 'n/a';
          }
          return (
            <div className='compare-row' key={i}>
              <div className='modal-row current-col'>{currentRow}</div>
              <div className='modal-row feature'>{feature}</div>
              <div className='modal-row compare-col'>{compareRow}</div>
            </div>

          );
        })}
        <button type='button' onClick={props.onClose} className="closeCompareModal">Close</button>
      </section>
    </div>
  );
};

ComparisonModal.propTypes = {
  current: PropTypes.any,
  compare: PropTypes.any,
  show: PropTypes.any,
  onClose: PropTypes.any
};

export default ComparisonModal;