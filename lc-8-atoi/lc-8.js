/**
 * @param {string} s
 * @return {number}
 */
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

var isNumber = function(c) {
    return 47 < c.charCodeAt(0) && c.charCodeAt(0) < 58;
}

var myAtoi = function(s) {
    if (s.length === 0) {
        return 0;
    }
    let idx = 0;
    let num = [];

    while (idx < s.length && s[idx] === " ") {
        idx++;
    }
    while (idx < s.length && (isNumber(s[idx]) || s[idx] === "-")) {
        num.push(s[idx]);
        idx++;
    }

    if (num.length > 10) {
        if (num[0] === "-") {
            return INT_MIN;
        }
        if (num[0] !== "-") {
            return INT_MAX;
        }
    }

    const res = Number(num.join(""));

    return Number(num.join(""));
};

//const skip = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tests = ["", " ", "42", "-42", "   -42", "4193 with words", "words and 987", "-91283472332"];
const expect = [0, 0, 42, -42, -42, 4193, 0, INT_MIN];

tests.forEach((t, idx) => {
    if (!skip[idx]) {
        const op = myAtoi(t);
        if (op === expect[idx]) {
            console.log(`${idx} PASS:  "${t}" atoi = ${op}`);
        }
        else {
            console.log(`${idx} ERROR:  "${t}" Expected ${expect[idx]} instead of ${op}`);
        }
    }
    else {
        console.log(`${idx} SKIP: "${t}"`);
    }

});
