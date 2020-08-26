import calculator from '../jsfiles/calculator';

test('Object contains methods', () => {
  expect(calculator()).toContain('add');
});