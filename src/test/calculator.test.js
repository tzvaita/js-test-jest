import calculator from '../jsfiles/calculator';

test('Object contains methods', () => {
  expect(calculator.add(2, 5)).toBe(7);
});