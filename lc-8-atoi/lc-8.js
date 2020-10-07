/**
 * @param {string} s
 * @return {number}
 */
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

var myAtoi = function(s) {

};

//const skip = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tests = ["42", "   -42", "4193 with words", "words and 987", "-91283472332"];
const expect = [42, -42, 4193, 0, INT_MIN];

tests.forEach((t, idx) => {
    if (!skip[idx]) {
        const op = convert(t);
        if (op === expect[idx]) {
            console.log(`${idx} PASS:  "${t}" atoi = "${op}"`);
        }
        else {
            console.log(`${idx} ERROR:  "${t}" Expected "${expect[idx]}"" instead of "${op}"`);
        }
    }
    else {
        console.log(`${idx} SKIP: "${t}"`);
    }

});
