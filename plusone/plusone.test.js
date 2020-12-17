const assert = require('assert');
const { it } = require('mocha');
const { plusone } = require('./plusone')

describe('Plus One', () => {
    it('should validate array lenght 1 <= digits.length <= 100', () => {
      assert.strictEqual(plusone(), Infinity);
      assert.strictEqual(plusone([]), Infinity);
      const longArray = new Array(101);
      assert.strictEqual(plusone(longArray), Infinity);
    });

    it('should validate all elements are a single digit betwee 0 and 9', () => {
      assert.strictEqual(plusone([123, 234123, 1234]), Infinity);
    });

    it('should add one to an array of digits that represent a number', () => {
      assert.deepStrictEqual(plusone([0]), [1], "Expected 0 + 1 = 1");
      assert.deepStrictEqual(plusone([2]), [3], "Expected 2 + 1 = 3");
      assert.deepStrictEqual(plusone([9]), [1,0], "Expected 9 + 1 = 10");
      assert.deepStrictEqual(plusone([1,2,3]), [1,2,4], "Expected 123 + 1 = 124");
      assert.deepStrictEqual(plusone([9,9,9]), [1,0,0,0], "Expected 999 + 1 = 1000");
      assert.deepStrictEqual(plusone([8,9,9,9]), [9,0,0,0], "Expected 8999 + 1 = 9000");
      
    });
    

  });
