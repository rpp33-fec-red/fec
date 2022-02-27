import React, {useState} from 'react';
import ReviewProductCharacteristics from './AddReview/ReviewCharacteristics.js';
import PropTypes from 'prop-types';

function AddReview (props) {
  let characteristics;
  if (props.reviewsCharacteristics) {
    characteristics =

    Object.keys(props.reviewsCharacteristics).map((characteristic) => {
      return <ReviewProductCharacteristics key={props.reviewsCharacteristics[characteristic].id} characteristic={characteristic}/>;
    });
  }

  const [characterCount, updateCharacterCount] = useState(0);

  let bodyCharacterCountMessage;
  characterCount < 50 ?
    bodyCharacterCountMessage = <p>Minimum required characters left: {50 - characterCount}</p> :
    bodyCharacterCountMessage = <p>Minimum reached</p>;

  return (
    <div className="add-review modal-window">
      <form className="modal-content">
        <h2>Write Your Review</h2>
        <h3>About the [Product Name]</h3>
        <button onClick={props.closeAddReviewWindow}>Close</button>
        <div>
          <label htmlFor="rating">Overall Rating: </label>
          <input name="rating" type="text" required="required"/>
        </div>

        <div>
          <label htmlFor="recommend" required="required">Do you recommend this product? </label>

          <label>Yes </label>
          <input name="recommend" type="radio"/>
          <label>No </label>
          <input name="recommend" type="radio"/>
        </div>

        <div>
          <label htmlFor="characteristics" required="required">Characteristics: </label>
          {characteristics}
        </div>

        <div>
          <label htmlFor="summary">Review Summary: </label>
          <input name="summary" type="text" required="required" maxLength="60" placeholder="Example: Best purchase ever!"/>
        </div>

        <div>
          <label htmlFor="body">Review Body: </label>
          <input
            name="body"
            type="text"
            required="required"
            minLength="50"
            maxLength="1000"
            placeholder="Why did you like the product or not?"
            onChange={(event)=> {
              updateCharacterCount(event.target.value.length);
            }}/>
          {bodyCharacterCountMessage}
        </div>

        <div>
          <label htmlFor="photos">Upload photos: </label>
          <input name="photos" type="file" required="required"/>
        </div>

        <div>
          <label htmlFor="nickname">Nickname: </label>
          <input name="nickname" type="text" required="required" maxLength="60"/>
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input name="email" type="text" required="required" maxLength="60"/>
        </div>

        <input type="submit"/>

      </form>
    </div>
  );
}

AddReview.propTypes = {
  reviewsCharacteristics: PropTypes.any,
  closeAddReviewWindow: PropTypes.func
};

export default AddReview;