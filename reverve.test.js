const reverseString = require('./reverse');

test('The reverse of "test" is "tset"', () => {
  expect(reverseString('test')).toBe('tset');
});
