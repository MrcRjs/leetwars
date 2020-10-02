/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let substr = "";
    let max = 1;

    if (s === "") {
        return 0;
    }
    for (let i = 1; i < s.length; i++) {
        substr = s.slice(start, i);
        // If substring includes the next
        const nextChar = s[i];
        const ncIdx = substr.indexOf(nextChar);
        if (ncIdx !== -1) {
            if (substr.length > max) {
                max = substr.length;
            }
            start = start + ncIdx + 1;
        }
        else {
            if (substr.length + 1 > max) {
                max = substr.length + 1;
            }
        }
    }

    return max;
};
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const tests = ["nfpdmpi", " ", "", "---123asd", "aaaaa", "baaaa", "aaab", "aaabbb", "pwwkew"];
const expect = [5, 1, 0, 7, 1, 2, 2, 2, 3];

tests.forEach((t, idx) => {
    if (!skip[idx]) {
        const op = lengthOfLongestSubstring(t);
        if (op === expect[idx]) {
            console.log(`${idx} PASS:  "${t}" max = ${op}`);
        }
        else {
            console.log(`${idx} ERROR:  "${t}" Expected ${expect[idx]} instead of ${op}`);
        }
    }
    else {
        console.log(`${idx} SKIP: "${t}"`);
    }

});
