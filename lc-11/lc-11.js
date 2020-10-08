/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

};

//const skip = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tests = [
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
    [1, 1],
    [4, 3, 2, 1, 4],
    [1, 2, 1]
];
const expect = [49, 1, 16, 2];

tests.forEach((t, idx) => {
    if (!skip[idx]) {
        const op = maxArea(t);
        if (op === expect[idx]) {
            console.log(`${idx} PASS:  "${t}" maxArea = ${op}`);
        }
        else {
            console.log(`${idx} ERROR:  "${t}" Expected ${expect[idx]} instead of ${op}`);
        }
    }
    else {
        console.log(`${idx} SKIP: "${t}"`);
    }

});
