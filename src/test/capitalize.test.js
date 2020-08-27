import capitalize from '../jsfiles/capitalize';

test('capitalize first Letter', () => {
  expect(capitalize('here')).toBe('Here');
});