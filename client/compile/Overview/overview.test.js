import renderer from 'react-test-renderer';
import React from 'react';
// const TestRenderer = require('react-test-renderer'); // ES5 with npm
import testData from './testdata.js'
import Overview from './overview.component.js';
import Model from '../model.js';
var model = new Model(false);


describe('component should render',function(){
  var fakeData = testData;

  var  getData = function (){
    return model.getData;
  }

  test('should have overview component in browser',function(){

    var tree = renderer.create(<Overview getProducts={getData}/>).toJSON()
    console.log('treeee',tree)

    expect(tree).toMatchSnapshot()
  })




})