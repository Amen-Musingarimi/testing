const capitalize = require('./capitalize');

test('Should be the same', () => {
  expect(capitalize('capitalize')).toEqual('CAPITALIZE');
});
