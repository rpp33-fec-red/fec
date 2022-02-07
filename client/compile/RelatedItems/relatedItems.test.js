//grab your functions to test  and import them to this file

//https://jestjs.io/docs/getting-started

const sum = require('./relatedItems.component').sum;

test ('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});