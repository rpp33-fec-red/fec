/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor} from '@testing-library/react';
import RatingsWidget from './RatingsWidget.js';
import Ratings from './Ratings/Ratings.js';
import Reviews from './Reviews/Reviews.js';
import ReviewTile from './Reviews/ReviewTile.js';
import ReviewsList from './Reviews/ReviewsList.js';
import ReviewsSorting from './Reviews/ReviewsSorting.js';
import reviewsData from './sample_data.js';
import Model from '../model.js';
var model = new Model(false);
import '@testing-library/jest-dom';

describe('RatingsWidget component', () => {

  test('renders correctly', () => {
    const tree = renderer
      .create(<RatingsWidget getReviews={model.getData}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Reviews component', () => {

  test('renders correctly', () => {
    const tree = renderer
      .create(<Reviews reviews={reviewsData.results}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});


describe('Ratings component', () => {

  test('renders correctly', () => {
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
      .create(<ReviewTile review={testReview}/>)
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


  test('caps review summary at 60 characters', () => {
    let testReview = reviewsData.results[2];
    const {getByText} = render(<ReviewTile review={testReview}/>);
    const reviewSummary = getByText('I\'m enjoying wearing these shades because they block the sun...');
    expect(reviewSummary).toBeInTheDocument();
  });


  test('displays show more button only appears when there are more than 250 characters in the review body', () => {
    // testing if show more appears
    let testReview = reviewsData.results[2];
    const {getByText, rerender} = render(<ReviewTile review={testReview}/>);
    expect(getByText('Show More')).toBeInTheDocument();

    // testing if show more does not appear
    testReview = reviewsData.results[1];
    rerender(<ReviewTile review={testReview}/>);
    expect(() => {
      getByText('Show More').toThrow();
    });
  });


  test('shows full review body when show more is clicked', () => {
    let testReview = reviewsData.results[2];
    const {getByText} = render(<ReviewTile review={testReview}/>);
    fireEvent.click(getByText('Show More'));
    expect(getByText(testReview.body)).toBeInTheDocument();
  });


  test('shows "I recommend this product" when product is recommended', () => {
    let testReview = reviewsData.results[0];
    const {getByText} = render(<ReviewTile review={testReview}/>);
    expect(getByText('☑ I recommend this product')).toBeInTheDocument();
  });


  test('increments helpfulness count when "Yes" is clicked and decrements when clicked again', () => {
    let testReview = reviewsData.results[2];
    const {getByText} = render(<ReviewTile review={testReview}/>);
    fireEvent.click(getByText('Yes'));
    expect(getByText(/9/)).toBeInTheDocument();
    fireEvent.click(getByText('Yes'));
    expect(getByText(/8/)).toBeInTheDocument();
  });


  test('displays images when they are included in the review', () => {
    // shows image when review image is included
    let testReview = reviewsData.results[0];
    const {getByAltText, rerender} = render(<ReviewTile review={testReview}/>);
    expect(getByAltText(`Review photo ${testReview.photos[0].id} submitted by: ${testReview.reviewer_name}`)).toBeInTheDocument();

    // does not show image when review not submitted by reviewer
    testReview = reviewsData.results[1];
    rerender(<ReviewTile review={testReview}/>);
    expect(() => {
      getByAltText(`Review photo ${testReview.photos[0].id} submitted by: ${testReview.reviewer_name}`).toThrow();
    });
  });


  test('Shows a modal window when image is clicked', () => {
    let testReview = reviewsData.results[0];
    const {getByAltText} = render(<ReviewTile review={testReview}/>);
    fireEvent.click(getByAltText(`Review photo ${testReview.photos[0].id} submitted by: ${testReview.reviewer_name}`));
    expect(getByAltText(`Close-up of review photo ${testReview.photos[0].id} submitted by: ${testReview.reviewer_name}`));
  });


  test('closes modal window when image is clicked out', () => {
    let testReview = reviewsData.results[0];
    const {getByAltText} = render(<ReviewTile review={testReview}/>);
    fireEvent.click(getByAltText(`Review photo ${testReview.photos[0].id} submitted by: ${testReview.reviewer_name}`));
    fireEvent.click(document);
    expect(() => {
      getByAltText(`Close-up of review photo ${testReview.photos[0].id} submitted by: ${testReview.reviewer_name}`).toThrow();
    });
  });

});

describe('ReviewsList component', () => {

  beforeAll(() = {
    return render(<ReviewsList reviews={testReview}/>);
  });

  const testReview = reviewsData.results;
  test('renders correctly', () => {
    const tree = renderer
      .create(<ReviewsList reviews={testReview}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reviews list contains two reviews by default when there are only two reviews for a product', async () => {
    let testReview = reviewsData.results;
    const {getAllByText} = await render(<ReviewsList reviews={testReview}/>);
    await waitFor(() => expect(getAllByText(/Helpful?\w/)).toHaveLength(2));
  });


  test('more reviews button shows when there are more than two reviews for a product', () => {
    let testReview = reviewsData.results;
    const {getByRole} = render(<ReviewsList reviews={testReview}/>);
    expect(getByRole('button', {name: "MORE REVIEWS"})).toBeInTheDocument();
  });


  test('more reviews button does not appear when there are two or less reviews', () => {
    let testReview = [{
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": true,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
        "id": 1,
        "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
      },
      {
        "id": 2,
        "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
      },
        // ...
      ]
    }];
    const {getByRole} = render(<ReviewsList reviews={testReview}/>);
    expect(() => {
      getByRole('button', {name: "MORE REVIEWS"}).toThrow();
    });
  });


  test('two additional reviews appear if more reviews button is clicked', async () => {
    let testReview = reviewsData.results;
    const {getByRole, getAllByText} = render(<ReviewsList reviews={testReview}/>);
    fireEvent.click(getByRole('button', {name: "MORE REVIEWS"}));
    await waitFor(() => expect(getAllByText(/Helpful?\w/)).toHaveLength(4));
  });

});

describe('ReviewsSorting component', () => {

  test('renders correctly', () => {
    const tree = renderer
      .create(<ReviewsSorting reviews={reviewsData.results}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});