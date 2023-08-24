const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('tests calculateNumber function:', () => {
  describe('calculates two integers:', () => {
    it('returns 4.', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });
  describe('calculates one float & one integer:', () => {
    it('returns 5.', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });
  describe('calculates one float & one integer (round down):', () => {
    it('returns 4.', () => {
      assert.strictEqual(calculateNumber(1, 3.3), 4);
    });
  });
  describe('calculates one float & one int reversed:', () => {
    it('returns 5.', () => {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });
  describe('calculates two floats:', () => {
    it('returns 5.', () => {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });
  describe('calculates two floats w/borderline:', () => {
    it('returns 6.', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });
});
