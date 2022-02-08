import TestRenderer from 'react-test-renderer';
import React from 'react';
// const TestRenderer = require('react-test-renderer'); // ES5 with npm
import testData from './testdata.js'
import Overview from './overview.component.js';
console.log(Overview)
import Model from '../model.js';
var model = new Model(false);


describe('component should render',function(){
var fakeData = testData;




  test('should have overview component in browser',function(){

    const tree = TestRenderer.create(<Overview getProducts={model.getData}/>)
    var reactObj = tree.toJSON()
    expect(reactObj.type).toMatchSnapshot()
  })




})