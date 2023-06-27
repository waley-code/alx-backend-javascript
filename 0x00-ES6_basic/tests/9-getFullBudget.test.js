import appendToEachArrayValue from '../10-loops.js';

test('returns the correct array', () => {
  expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toStrictEqual(['correctly-appended', 'correctly-fixed', 'correctly-displayed']);
});
