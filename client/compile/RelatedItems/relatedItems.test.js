/* eslint-disable no-undef */


import React from 'react';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-environment-jsdom';
import TestRenderer from 'react-test-renderer';
import RelatedProducts from './RelatedProducts.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';
import ProductCard from './Cards/ProductCard.jsx';
import OutfitCard from './Cards/OutfitCard.jsx';

describe ('Snapshot of whole widget', () => {
  const testRenderer = TestRenderer.create(<RelatedProducts getData={()=>{}} product_id='64621'/> );
  expect (testRenderer.toJSON()).toMatchSnapshot();
});

describe ('Testing initial render', () => {
  test ('Related Product render', () => {
    render (<RelatedProducts getData={()=>{}} product_id='64621'/> );
    screen.debug();
  });

  test ('Product Carousel render', () => {
    render (<ProductCarousel
      relatedProducts={[]}
      getData={()=>{}}
      handleClick={()=>{}}
      handleCompare={()=>{}}
    /> );
    screen.debug();
  });

  test ('Outfit Carousel render', () => {
    render (<OutfitCarousel
      outfit_Ids={[]}
      getData={()=>{}}
      outfitLoaded={{}}
      handleAddToOutfit={()=>{}}
      handleDelete={()=>{}}
    /> );
    screen.debug();
  });

  test ('Product Card initial render', () => {
    render (<ProductCard 
      key='64621'
      product_id='64621'
      getData={()=>{}}
      handleClick={()=>{}}
      handleCompare={()=>{}}
    /> );
    screen.debug();
  });

  test ('Outfit Card initial render', () => {
    render (<OutfitCard
      key='64621'
      index='64621'
      outfit_id='64621'
      handleDelete={()=>{}}
      getData={()=>{}}
    /> );
    screen.debug();
  });
});

describe ('Testing clicks', () => {
  test ('should have href link with product', async () => {
    render (<ProductCard 
      key='64621'
      product_id='64621'
      getData={()=>{}}
      handleClick={()=>{}}
      handleCompare={()=>{}}
    />);
    let link = screen.getByRole('link');
    expect(link).toHaveAttribute("href", "/?productid=64621");
  });

  test ('* button on Product Card', async () => {
    let buttonText;
    render (<ProductCard 
      key='64621'
      product_id='64621'
      getData={()=>{}}
      handleClick={()=>{}}
      handleCompare={()=>{ buttonText='Clicked'; }}
    />);
    buttonText = screen.getByText('*');
    await fireEvent.click(screen.getByRole('button'));
    expect(buttonText).toBe('Clicked');
  });

  test ('X button on Outfit Card', async () => {
    let buttonText;
    render (<OutfitCard
      key='64621'
      index='64621'
      outfit_id='64621'
      handleDelete={()=>{ buttonText='Clicked'; }}
      getData={()=>{}}
    />);
    buttonText = screen.getByText('X');
    await fireEvent.click(screen.getByRole('button'));
    expect(buttonText).toBe('Clicked');
  });

});




