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
  let testReview = reviewsData.results[0];
  test('renders correctly', () => {
    const tree = renderer
    .create(<ReviewTile review={reviewsData.results[0]}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });


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
  test('caps review summary at 60 characters', () => {
    let testReview = reviewsData.results[2];
    const {getByText} = render(<ReviewTile review={testReview}/>);
    const reviewSummary = getByText('I\'m enjoying wearing these shades because they block the sun...');
    expect(reviewSummary).toBeInTheDocument();
  });

  // test to make sure only 250 characters show by default

  // test for show more button
  test('displays show more button only appears when there are more than 250 characters in the review body', () => {
    let testReview = reviewsData.results[2];
    const {getByText} = render(<ReviewTile review={testReview}/>);

  });

  test('shows full review body when show more is clicked', () => {
    let testReview = reviewsData.results[2];
    const {getByText} = render(<ReviewTile review={testReview}/>);
    expect(getByText('☑ I recommend this product')).toBeInTheDocument();
  });

  test('shows "I recommend this product" when product is recommended', () => {
    let testReview = reviewsData.results[0];
    const {getByText} = render(<ReviewTile review={testReview}/>);

  });

  test('increments helpfulness count when "Yes" is clicked', () => {
    let testReview = reviewsData.results[2];
    const {getByText} = render(<ReviewTile review={testReview}/>);

  });

});

