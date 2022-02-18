import renderer from 'react-test-renderer';
import React from 'react';
import testData from './testdata.js'
import Overview from './overview.component.js';
import Model from '../model.js';
var model = new Model(false);
//get other components and inject the props with fake data

describe('Overview component should render',function(){

  var getData = function (){
    return model.getData;
  };
  var mainTree = renderer.create(<Overview getProducts={getData}/>).toJSON();

  test('should have overview component in browser',function(){
    expect(mainTree).toMatchSnapshot();
  });

  test('should have overview component in browser', function(){
    expect(mainTree.children[0].type).toEqual('div');
  });
});

describe('should have correct data',function() {
  var getData = function () {
    return model.getData;
  };
  var mainTree = renderer.create(<Overview getProducts={getData}/>).toJSON();
  test('should have props onProduct',function(){
    console.log(mainTree.props);
    expect(mainTree.props['onProduct']).not.toBe(undefined);
  });
});
