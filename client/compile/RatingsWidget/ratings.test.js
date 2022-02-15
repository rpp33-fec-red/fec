import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react'
import RatingsWidget from './components/RatingsWidget.js';
import Ratings from './components/Ratings/Ratings.js';
import Reviews from './components/Reviews/Reviews.js';
import ReviewTile from './components/Reviews/ReviewTile.js';
import reviewsData from './sample_data.js'

describe('Components render correctly', () => {

  test('main ratings and reviews widget renders correctly', () => {
    const tree = renderer
    .create(<RatingsWidget/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('main reviews component renders correctly', () => {
    const tree = renderer
    .create(<Reviews reviews={reviewsData.results}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('main ratings component renders correctly', () => {
    const tree = renderer
    .create(<Ratings/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('ReviewTile component', () => {

  var testReview = {
    "review_id": 5,
    "rating": 3,
    "summary": "I'm enjoying wearing these shades because they go well with alot of outfits and block the sun from my eyes",
    "recommend": true,
    "response": null,
    "body": "Comfortable and practical.",
    "date": "2019-04-14T00:00:00.000Z",
    "reviewer_name": "shortandsweeet",
    "helpfulness": 5,
    "photos": [{
        "id": 1,
        "url": "urlplaceholder/review_5_photo_number_1.jpg"
      },
      {
        "id": 2,
        "url": "urlplaceholder/review_5_photo_number_2.jpg"
      },
      // ...
    ]
  }

  test('renders correctly', () => {
    const tree = renderer
    .create(<ReviewTile review={testReview}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test for convert date function
  test('converts date into Month DD, YYYY format', () => {
    const {getByText} = render(<ReviewTile review={testReview}/>);
    expect(getByText('April 14, 2019')).toBeInTheDocument();
  });

  // check that review summary is capped at 60 characters

  // test for show more button
  // test to make sure only 250 characters show by default

  // test to check if "I recommend this product shows if product is recommended"

  // test for rating helpfulness
});

