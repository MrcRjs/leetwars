const assert = require('assert');
const { it } = require('mocha');
const { permutations } = require('./permutations')

describe('should Return all combinations, no duplicates', () => {
    it('should work for an empty string', () => {
      assert.deepStrictEqual(permutations(''), []);
    });

    it('should work for one letter string', () => { 
      assert.deepStrictEqual(permutations('a'), ['a']);
    });

    
    it('should return all posible combinations', () => { 
      assert.deepStrictEqual(permutations('ab').sort(), ['ab', 'ba'].sort());
    });
    it('should return all posible combinations', () => { 
      assert.deepStrictEqual(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
    });
    
});
