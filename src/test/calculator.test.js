import calculator from '../jsfiles/calculator';

test('Calculator object contains add method', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('Calculator object contains subtract method', () => {
  expect(calculator.subtract(5, 1)).toBe(4);
});

test('Calculator object contains divide method', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

test('Calculator object contains multiply method', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});