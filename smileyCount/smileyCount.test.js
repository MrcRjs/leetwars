const assert = require('assert');
const { it } = require('mocha');

const  { countSmileys } = require('./smileyCount');

describe("Smiley count", () => {
    it("should return the total number of smiling faces in the array",() => {
        assert.strictEqual(countSmileys([]), 0);
    });

    it("should return the total number of smiling faces in the array", () => {
        assert.strictEqual(countSmileys([':D', ':~)', ';~D', ':)']), 4);

    });

    it("should return the total number of smiling faces in the array", () => {
        assert.strictEqual(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);

    });

    it("should return the total number of smiling faces in the array", () => {
        assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
    });

});