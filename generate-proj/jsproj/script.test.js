const assert = require('assert');
const { it } = require('mocha');
const { script } = require('./script')

describe('example tests', () => {
    it('should fail', () => {
      assert.strictEqual(script(), true);
    });
});
