// const { printTitle } = require('./util');

// test('should print an uppercase test', () => {
//     expect(printTitle()).toBe('DELECTUS AUT AUTEM')
// });

// const exports = require('webpack');
jest.mock('./http');
const { loadTitle } = require('./util');

test('should print an uppercase test', () => {
    loadTitle().then(title => {
        exports(title).toBe('DELECTUS AUT AUTEM')
    })
});