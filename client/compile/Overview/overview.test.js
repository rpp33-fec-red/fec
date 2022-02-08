<<<<<<< HEAD
//grab your functions to test  and import them to this file

//https://jestjs.io/docs/getting-started
=======
import renderer from 'react-test-renderer';
import React from 'react';
// const TestRenderer = require('react-test-renderer'); // ES5 with npm
import testData from './testdata.js'
import Overview from './overview.component.js';
console.log(Overview)
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
>>>>>>> 35bf351... testing done for finding one component and added in package json update jest artifacts to restore snapshots
