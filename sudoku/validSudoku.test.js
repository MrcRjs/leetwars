const assert = require('assert');
const { it } = require('mocha');

const { isValidSudoku } = require('./validSudoku');

describe("Validate sudoku board", () => {
    const validBoard = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

    const invalidBoard = [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

    const invalidBoardSize = [[], []];

    const invalidBoardRowSize = [["1","2","3"], ["1","2","3"], [], [], [], [], [], [], []];

    const invalidBoardContent =[
        ["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "INV", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "INVALID BOARD CONTENT HERE", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", "    ", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

    const validBoardTest = [
        [".",".",".",".",".",".",".","7","."],
        [".",".","9",".",".",".",".",".","."],
        [".","8",".",".",".","3",".",".","."],
        ["6",".",".","1",".",".",".",".","."],
        ["7",".",".",".",".",".",".","4","."],
        [".",".",".",".","6",".",".","3","."],
        [".",".",".",".",".",".",".",".","4"],
        [".",".","4","8","5",".",".",".","."],
        [".",".",".",".",".",".",".",".","."]
    ]
    it('should return true for a valid sudoku board', () => {
        assert.strictEqual(isValidSudoku(validBoard), true)
    });

    it('should validate the size of the whole board', () => {
        assert.strictEqual(isValidSudoku(invalidBoardSize), false)
    });

    it('should validate each row size', () => {
        assert.strictEqual(isValidSudoku(invalidBoardRowSize), false)
    });

    it('should validate the content of each slot in the board', () => {
        assert.strictEqual(isValidSudoku(invalidBoardContent), false);
    });

    it('should return false if the sudoku board is invalid', () => {
        assert.strictEqual(isValidSudoku(invalidBoard), false);
    });

    it('should return true for a valid board', () => {
        assert.strictEqual(isValidSudoku(validBoardTest), true);
    });

});