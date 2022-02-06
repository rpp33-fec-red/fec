//grab your functions to test  and import them to this file
const Questions = require('./Questions.jsx');
const SearchBar = require('./subcomponents/SearchBar.jsx');
//https://jestjs.io/docs/getting-started

describe('practice test', () => {
  function sum(a, b) {
    return a + b;
  }

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});


