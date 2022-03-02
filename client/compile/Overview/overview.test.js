/* eslint-disable no-undef */
import renderer from 'react-test-renderer';
import React from 'react';

import Overview from './overview.component.js';
import Model from '../model.js';
var model = new Model(false);
//get other components and inject the props with fake data

// eslint-disable-next-line no-undef
describe('Overview component should render',function(){

  var getData = function (){
    return model.getData;
  };

  var mainTree = renderer.create(<Overview getProducts={getData}/>).toJSON();
  test('should have overview component in browser',function(){
    expect(mainTree).toMatchSnapshot();
  });

  test('should have child with div', function(){
    expect(mainTree.children[0].type).toEqual('div');
  });
});

describe('should have correct data',function() {
  var getData = function () {
    return model.getData;
  };
  var mainTree = renderer.create(<Overview getProducts={getData}/>);
  var instance =mainTree.getInstance();
  console.log(instance)
  test('should have props onProduct',function(){
    expect(instance.state['onProduct']).not.toBe(undefined);
  });

  test('should have props style',function(){
    expect(instance.state['onStyle']).not.toBe(undefined);
  });
});



describe('data should get passed down to left container then to image container',function() {
  var getData = function () {
    return model.getData;
  };
  var mainTree = renderer.create(<Overview getProducts={getData}/>);
  var instance =mainTree.getInstance();
  console.log(instance);
  test('instance props of overview should have function getdData from model',function(){
    expect(typeof instance.props.getProducts).toBe('function');
  });

  test('instance props of overview should have function getdData from model',function(){
    expect(typeof instance.props.getProducts).toBe('function');
  })
  var children = instance._reactInternals.return;
  console.log(children)
  test('CHILD has class left-container',function(){
    expect(children[0]).not.toBe(undefined);
  })

});