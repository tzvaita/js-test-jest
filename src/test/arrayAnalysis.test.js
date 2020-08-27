import analyze from '../jsfiles/arrayAnalysis';

test('analyze method returned object contains average property', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.average).toBe(4);
});

test('analyze method returned object contains min property', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.min).toBe(1);
});

test('analyze method returned object contains max property', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.max).toBe(8);
});

test('analyze method returned object contains length property', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.len).toBe(6);
});