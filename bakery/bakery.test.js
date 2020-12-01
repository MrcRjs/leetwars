const assert = require('assert');
const { it } = require('mocha');
const { cakes } = require('./bakery')

describe('it should evaluate a simple cakes', () => {
    it('should test at least with one ingredient', () => {
        assert.strictEqual(cakes({pinguino: 1}, {pinguino: 1}), 1);
    });

    it('should validate when we have enough ingredients for more than one recipe', () => {
        assert.strictEqual(cakes({pinguino: 1}, {pinguino: 2}), 2);
    });

    it('should validate when we dont have enough ingredients', () => {
        assert.strictEqual(cakes({pinguino: 1}, {pinguino: 0}), 0);
    });

    it('should validate when we more than enough ingredients', () => {
        const recipe = {flour: 500, sugar: 200, eggs: 1};
        const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
        assert.strictEqual(cakes(recipe, available), 2);
    });
    
    it('should validate when we dont have enough ingredients', () => {
        const recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
        const available = {sugar: 500, flour: 2000, milk: 2000};
        assert.strictEqual(cakes(recipe, available), 0);
    });

    it('should validate when we dont have enough ingredients', () => {
        const recipe = {"chocolate": 0,"apples":34,"nuts":85}
        const available = {"apples":8800,"pears":1500,"chocolate": 1300,"cocoa":3800,"eggs":2800,"milk":1000,"sugar":8400,"cream":1800,"oil":8300,"butter":500,"nuts":6600,"flour":2900,"crumbles":4400}    
        assert.strictEqual(cakes(recipe, available), 0);
    });

});

