const assert = require('assert');
const { it } = require('mocha');
const { parseMolecule } = require('./chemical')

describe('Component string to object', () => {
    it('should  parse a simple formula', () => {
        assert.deepStrictEqual(parseMolecule("H"), {H: 1}, "Should parse hidrogen");
    });

    it('should  parse a simple formula', () => {
        assert.deepStrictEqual(parseMolecule("HO"), {H: 1, O: 1}, "Should parse oxhidrogen");
    });

    it('should  parse a simple formula H2O2', () => {
        assert.deepStrictEqual(parseMolecule("H2O2"), {H: 2, O: 2}, "Should parse duoxhidrogen");
    });

    it('should  parse a simple formula KH3O4', () => {
        assert.deepStrictEqual(parseMolecule("KH3O4"), {K: 1, H: 3, O: 4}, "Should parse duoxhidrogen");
    });

    it('should parse a chemical into its json representation', () => {
        assert.deepStrictEqual(parseMolecule("H2O"), {H: 2, O: 1}, "Should parse water");
        //assert.deepStrictEqual(parseMolecule("Mg(OH)2"), {Mg: 1, O: 2, H: 2}, "Should parse magnesium hydroxide: Mg(OH)2");
        //assert.deepStrictEqual(parseMolecule("K4[ON(SO3)2]2"), {K: 4, O: 14, N: 2, S: 4}, "Should parse Fremy's salt: K4[ON(SO3)2]2");
    });

    it('should parse a formula with two letter elements', () => {
        assert.deepStrictEqual(parseMolecule("MgAuFr"), {Mg: 1, Au: 1, Fr: 1}, "Should parse  MagneFerrold");
    });

    it('should parse a formula with two letter elements and number', () => {
        assert.deepStrictEqual(parseMolecule("MgAu2Fr"), {Mg: 1, Au: 2, Fr: 1}, "Should parse  MagneFerrdugold");
    });

    it('should parse a formula with two letter elements and numbers', () => {
        assert.deepStrictEqual(parseMolecule("MgAu2Fr2"), {Mg: 1, Au: 2, Fr: 2}, "Should parse  MagneFerrdugold");
    });

    it('should parse a formula with an inner formula', () => {
        assert.deepStrictEqual(parseMolecule("Mg(OH)2"), {Mg: 1, O: 2, H: 2}, "Should parse magnesium hydroxide: Mg(OH)2");
    });
});

