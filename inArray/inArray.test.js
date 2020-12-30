const assert = require('assert');
const { it } = require('mocha');
const { inArray } = require('./inArray')

describe('check if elements of Arr1 are substrings of Arr2 ', () => {
    it('should return an empty array if non of the strings are containg', () => {
      assert.deepStrictEqual(inArray(["abc"], []), []);
    });

    it('should return an empty array if non of the strings are containg', () => {
      assert.deepStrictEqual(inArray(["abc"]), []);
    });

    it('should return an empty array if non of the strings are containg', () => {
      assert.deepStrictEqual(inArray(["abc"], ["abc"]), ["abc"]);
    })

    let a1 = ["xyz", "live", "strong"];
    const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
    
    it('should return an empty array if non of the strings are containg', () => {
      assert.deepStrictEqual(inArray(a1, a2), ["live", "strong"]);
    })

    it('should return an empty array if non of the strings are containg', () => {
      a1 = ["live", "strong", "arp"];
      assert.deepStrictEqual(inArray(a1, a2), ["arp", "live", "strong"]);
    })

    it('should return an empty array if non of the strings are containg', () => {
      a1 = ["tarp", "mice", "bull"];
      assert.deepStrictEqual(inArray(a1, a2), []);
    })
});
