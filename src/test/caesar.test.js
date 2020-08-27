import caesar from '../jsfiles/caesar';

test('Caesar Cipher explicit case of z', () => {
  expect(caesar('z', 1)).toBe('a');
});

test('Caesar Cipher method should maintain the same case', () => {
  expect(caesar('ABCdE', 1)).toBe('BCDeF');
});

test('Caesar Cipher method should ignore punctuation', () => {
  expect(caesar("It's a Mad-Company", 1)).toBe("Ju't b Nbe-Dpnqboz");
});

test('Caesar Cipher method should take different shifts', () => {
  expect(caesar('abcdef', 5)).toBe('fghijk');
});