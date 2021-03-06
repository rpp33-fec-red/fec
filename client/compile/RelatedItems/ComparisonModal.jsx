/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-prototype-builtins */
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
        <div className='compare-row title-row'>
          <div className='rowTitle'>{currentName}</div>
          <div className='rowTitle'>Features</div>
          <div className='rowTitle'>{compareName}</div>
        </div>
        
        {totalfeatures.map((feature, i) => {
          let currentRow = null;
          let compareRow = null;
          if (current && current.hasOwnProperty(feature)) {
            currentRow = current[feature];
          } else {
            currentRow = '-';
          }
          if (compare && compare.hasOwnProperty(feature)) {
            compareRow = compare[feature];
          } else {
            compareRow = '-';
          }
          return (
            <div className='compare-row' key={i}>
              <div className='modal-row'>{currentRow}</div>
              <div className='modal-row'>{feature}</div>
              <div className='modal-row'>{compareRow}</div>
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