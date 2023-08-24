const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('tests advanced calculateNumber function:', () => {
  describe('tests SUM function:', () => {
    it('returns 6.', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('tests SUBTRACT function:', () => {
    it('returns -4.', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('tests DIVIDE function:', () => {
    it('returns 0.2.', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe('tests DIVIDE function W 0:', () => {
    it("returns 'Error'.", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
