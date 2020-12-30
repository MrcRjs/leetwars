const assert = require('assert');
const { it } = require('mocha');
const { digital_root } = require('./digital_root')

describe('Should return the sum of digits', () => {
    it('should return the same number for 1 digit nums', () => {
      let rand = Math.floor(Math.random() * 10);
      assert.strictEqual(digital_root(rand), rand);
    });

    it('should return the recursive sum of 16', () => {
      assert.strictEqual(digital_root(16), 7, "16  -->  1 + 6 = 7");
    });

    it('should return the recursive sum of 456', () => {
      assert.strictEqual(digital_root(456), 6, "456  -->  4 + 5 + 6 = 15 ---> 1 + 5 = 6");
    });

    it('should return the recursive sum of 16', () => {
      assert.strictEqual(digital_root(493193), 2, "493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2");
    });
});
