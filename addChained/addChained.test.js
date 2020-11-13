const assert = require('assert');
const { it } = require('mocha');
const { add } = require('./addChained')

describe('Sum add n chained', () => {
    it('sum a string numbers', () => {
        assert(add(1) == 1);
        assert(add(1)(2) == 3);
        assert(add(1)(2)(3) == 6);
        
    });
});

