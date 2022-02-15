/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react'
import RatingsWidget from './components/RatingsWidget.js';
import Ratings from './components/Ratings/Ratings.js';
import Reviews from './components/Reviews/Reviews.js';
import ReviewTile from './components/Reviews/ReviewTile.js';
import reviewsData from './sample_data.js';
import '@testing-library/jest-dom';

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

  test('renders correctly', () => {
    const tree = renderer
    .create(<ReviewTile review={reviewsData.results[0]}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test for convert date function
  test('converts date into Month DD, YYYY format', () => {
    let testReview = reviewsData.results[0];
    const {getByText, rerender} = render(<ReviewTile review={testReview}/>);
    expect(getByText(`${testReview.reviewer_name}, April 13, 2019`)).toBeInTheDocument();

    testReview = reviewsData.results[1];
    rerender(<ReviewTile review={testReview}/>);
    expect(getByText(`${testReview.reviewer_name}, June 22, 2019`)).toBeInTheDocument();

    testReview = reviewsData.results[2];
    rerender(<ReviewTile review={testReview}/>);
    expect(getByText(`${testReview.reviewer_name}, July 24, 2020`)).toBeInTheDocument();
  });

  // check that review summary is capped at 60 characters

  // test for show more button
  // test to make sure only 250 characters show by default

  // test to check if "I recommend this product shows if product is recommended"

  // test for rating helpfulness
});

