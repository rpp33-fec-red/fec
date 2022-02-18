import React from 'react';
import OutfitCard from '../Cards/OutfitCard.jsx';

const OutfitCarousel = (props) => {
console.log(props)
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
                                getRelatedItems={props.getRelatedItems}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default OutfitCarousel;
