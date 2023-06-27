import taskBlock from '../1-block-scoped.js';

test('returns the right values', () => {
  expect(taskBlock(true)).toStrictEqual([false, true]);
  expect(taskBlock(false)).toStrictEqual([false, true]);
});
