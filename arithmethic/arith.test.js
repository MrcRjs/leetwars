const assert = require('assert');
const { it } = require('mocha');

const {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    plus,
    minus,
    times,
    dividedBy
} = require('./arith');

describe("should return the sum of the digits", () => {

    it('should calculate a multiplication operation', () => {
        assert.strict(seven(times(five())), 35);
    });

    it('should calculate a sum operation', () => {
        assert.strict(four(plus(nine())), 13);
    });

    it('should calculate a substraction operation', () => {
        assert.strict(eight(minus(three())), 5);
    });

    it('should calculate a division operation', () => {
        assert.strict(six(dividedBy(two())), 3);
    });
});