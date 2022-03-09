import React, {useState, useEffect} from 'react';
import ProductCard from '../Cards/ProductCard.jsx';
import PropTypes from 'prop-types';
import '../relatedItems.scss';

const useWindowSize = () => {
  const isWindow = typeof window === 'object';
  const [windowSize, setWindowSize] = useState (isWindow ? window.innerWidth : undefined);
  useEffect(() => {
    const setSize = () => {
      setWindowSize(window.innerWidth);
    };
    if (isWindow) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindow, setWindowSize]);
  return windowSize;
};

const chunkArray = (array, chunkSize) => {
  let sets = [];
  for (let i = 0; i < array.length; i+=chunkSize) {
    let chunk = array.slice(i, i+chunkSize);
    sets.push(chunk);
  }
  return sets;
};

const ProductCarousel = (props) => {
  let relatedProducts = props.relatedProducts;
  let sets = chunkArray(relatedProducts, Math.floor(useWindowSize()/300));
  console.log('window size', useWindowSize());
  let numberOfSets = sets.length;
  let [current, setCurrent] = useState(0);
  const handleLeft = () => {return current === 0 ? setCurrent(numberOfSets - 1) : setCurrent(current - 1);};
  const handleRight = () => { return current === numberOfSets - 1 ? setCurrent(0) : setCurrent(current + 1);};
  return (
    <div className="relatedProductCarouselContainer">
      <div className="productCarousel">
        {current === 0 
          ? (<></>)
          : (numberOfSets > 0 && <button className="chevron-left" onClick={handleLeft}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></button>)
        }
        {sets[current] && sets[current].map((id) => {
          return (
            <ProductCard 
              key={id}
              product_id={id}
              getData={props.getData}
              handleClick={props.handleClick}
              handleCompare={props.handleCompare}
            /> 
          );
        })}
        {current === 0 
          ? (numberOfSets > 0 && <button className="chevron-right" onClick={handleRight}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></button>)
          : (<></>)
        }
      </div>
    </div>
  );
};

ProductCarousel.propTypes = {
  getData: PropTypes.any,
  relatedProducts: PropTypes.any,
  handleClick: PropTypes.any,
  handleCompare: PropTypes.any
};
  
export default ProductCarousel;