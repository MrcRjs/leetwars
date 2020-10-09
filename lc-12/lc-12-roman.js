/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

};
//const skip = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tests = [3, 58, 1993];
const expect = ["III", "LVIII", "MCMXCIV"];

tests.forEach((t, idx) => {
    if (!skip[idx]) {
        const op = intToRoman(t);
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
