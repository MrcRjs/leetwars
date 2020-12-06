const assert = require('assert');
const { Console } = require('console');
const { it } = require('mocha');
const { Cat } = require('./closures')

describe('Classes with closures', () => {
  const fluffy = new Cat('fluffy', 15);
  const garfield = new Cat('garfield', 25);
  describe('Cat instance', () => {
    try {

      it('should store cat weight', () => {
        assert.strictEqual(fluffy.weight, 15);
      });

      it('should be a Cat class instance', () => {
        assert.strictEqual(fluffy instanceof Cat, true);
      });

      it('should not have an averageWeight function', () => {
        assert.strictEqual(fluffy.averageWeight, undefined);
      });
      it('should throw an error when no params are provided', () => {
        assert.throws(() => new Cat())
      });
    }
    catch{}

  });

  describe('class methods', () => {
      it('Cat class can provide the average weight', () => {
        assert.strictEqual(typeof Cat.averageWeight, "function");
      });
  
      it('should be the correct average', () => {
        assert.strictEqual(Cat.averageWeight(), 20);
      });

      it('should track all cat weights even after an instance update', () => {
        const newWeight = Math.floor(Math.random() * 30) + 10;
        garfield.weight = newWeight;
        assert.strictEqual(Cat.averageWeight(), (fluffy.weight + garfield.weight) / 2);
      });

  });
});
