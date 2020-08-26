import caesar from '../jsfiles/caesar';

test('Caesar Cipher explicit case of z', () => {
  expect(caesar('z')).toBe('a');
});

test('Caesar Cipher method should maintain the same case', () => {
  expect(caesar('ABCdE')).toBe('BCDeF');
});

test('Caesar Cipher method should ignore punctuation', () => {
  expect(caesar("It's a Mad-Company")).toBe("Ju't b Nbe-Dpnqboz");
});