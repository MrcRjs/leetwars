const assert = require('assert');
const { it } = require('mocha');
const { climbingstairs, fibsum } = require('./climbingstairs')

describe('climbing stairs', () => {
  it('should return the number of combinations of steps', () => {
    assert.strictEqual(climbingstairs(1), 1);
  });
  it('should return the number of combinations of steps', () => {
    assert.strictEqual(climbingstairs(2), 2);
  });

  it('should return the number of combinations of steps', () => {
    assert.strictEqual(climbingstairs(3), 3);
  });
  it('should return the number of combinations of steps', () => {
    assert.strictEqual(climbingstairs(7), 21);
  });
  it('should return the number of combinations of steps', () => {
    assert.strictEqual(climbingstairs(8), 34);
  });
});

describe('fibonacci sum', () => {
  describe('Fibonacci sum', () => {
    it('should return 1 on 1', () => {
        assert.strictEqual(fibsum(1), 1)
    });
    it('should return 2 on 2', () => {
        assert.strictEqual(fibsum(2), 2)
    });

    it('should return 4 on 3', () => {
        assert.strictEqual(fibsum(3), 4)
    });

    it('should return 20 on 5', () => {
        assert.strictEqual(fibsum(6), 20)
    });
});
});