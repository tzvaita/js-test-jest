import reverse from '../jsfiles/reverse';

test('Return reversed string', () => {
  expect(reverse('backwards')).toBe('sdrawkcab');
});