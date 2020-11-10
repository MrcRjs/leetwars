const assert = require('assert');
const { it } = require('mocha');

const { digital_root } = require('./ultrasum');

describe("should return the sum of the digits", () => {


    it('should return one digit number', () => {
        assert.strictEqual(digital_root(0), 0);
    });

    it('should sum the digits until result is a one digit number', () => {
        assert.strictEqual(digital_root(16), 7);
    });

    it('should sum the digits until result is a one digit number', () => {
        assert.strictEqual(digital_root(942), 6);
    });

    it('should sum the digits until result is a one digit number', () => {
        assert.strictEqual(digital_root(132189), 6);
    });

    it('should sum the digits until result is a one digit number', () => {
        assert.strictEqual(digital_root(132189), 6);
    });

});