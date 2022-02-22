import React from 'react';
import PropTypes from 'prop-types';
import OutfitCard from '../Cards/OutfitCard.jsx';

const OutfitCarousel = (props) => {
  return (
    <div className="outfitCarouselContainer">
      <div className="productCarousel">
        <div style={({
          width: props.outfit_Ids.length *400,
          display: 'flex',
          justifyContent: 'left'
        })}>
          <div className="productCard" >
            <button
              id="addButton"
              varian="outline-primary"
              onClick={props.handleAddToOutfit}
            > + </button>
          </div>
          { props.outfit_Ids.map((id, i) => {
            return (
              <OutfitCard
                key={i}
                index={i}
                outfit_id={id}
                handleDelete={props.handleDelete}
                getData={props.getData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
OutfitCarousel.propTypes = {
  outfit_Ids: PropTypes.any,
  getData: PropTypes.any,
  outfitLoaded: PropTypes.any,
  handleAddToOutfit: PropTypes.any,
  handleDelete: PropTypes.any
};
export default OutfitCarousel;
