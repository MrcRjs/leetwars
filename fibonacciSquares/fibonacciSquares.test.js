const assert = require('assert');
const { it } = require('mocha');

const { perimeter, fibsum } = require('./fibonacciSquares');

describe("should return the perimeter of the rectangles", () => {

    it('should return 4 when there is just one square', () => {
       assert.strictEqual(perimeter(0), 4)
    });

    it('should return 80 when there are 5 squares', () => {
        assert.strictEqual(perimeter(5), 80)
        
    });
});

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