const stringLength = require('./string');

test('string length should be equal to 5', () => {
  expect(stringLength('hello')).toBe(5);
});
test('Should throw an error when we check " "', () => {
  expect(() => stringLength('')).toThrow();
});
