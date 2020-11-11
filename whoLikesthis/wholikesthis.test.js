const assert = require('assert');
const { it } = require('mocha');
const { likes } = require('./wholikesthis')

describe('example tests', () => {
    it('should return no one like this on empty array', () => {
      assert.strictEqual(likes([]), 'no one likes this');
    });

    it('should return the first person that liked this', () => {
        assert.strictEqual(likes(['Peter']), 'Peter likes this');
    });

    it('should return the first two persons that liked this', () => {
        assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    });

    it('should return the first three persons that liked this', () => {
        assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    });

    it('should return the first two persons that liked this plus the count of the remaining names', () => {
        assert.strictEqual(likes(['Ricardo', 'Marco', 'Alex', 'Jacob', 'Mark', 'Max']), 'Ricardo, Marco and 4 others like this');
    });
});
