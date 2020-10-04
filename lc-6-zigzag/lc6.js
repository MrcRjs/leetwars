/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= numRows || numRows === 1) {
        return s;
    }

    if (numRows === 2) {
        let res = "";
        for (let i = 0; i < s.length; i += 2) {
            res += s[i];
        }
        for (let i = 1; i < s.length; i += 2) {
            res += s[i];
        }
        return res;
    }

    const rowDelta = numRows - 1;
    const totalSubs = Math.floor(s.length / rowDelta);
    const columns = [];
    for (let i = 0; i <= totalSubs; i++) {
        const cidx = i * rowDelta;
        let col = s.slice(cidx, cidx + rowDelta);
        if (i % 2 === 0) {
            columns.push(col + "~");
        }
        else {
            while (col.length < numRows) {
                col += "~";
            }
            columns.push(col.split("").reverse().join(""));
        }
    }

    let res = "";
    for (let i = 0; i < numRows; i++) {
        for (let c of columns) {
            if (c[i] && c[i] !== "~") {
                res += c[i];
            }
        }
    }

    return res;
};

//const skip = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tests = [{ s: "Foo", r: 10 }, { s: "", r: 1 }, { s: "PAYPALISHIRING", r: 4 }, { s: "ABCDE", r: 4 }];
const expect = ["Foo", "", "PINALSIGYAHRPI", "ABCED"];

tests.forEach((t, idx) => {
    if (!skip[idx]) {
        const op = convert(t.s, t.r);
        if (op === expect[idx]) {
            console.log(`${idx} PASS:  "${t.s}" zigz = "${op}"`);
        }
        else {
            console.log(`${idx} ERROR:  "${t.s}" Expected "${expect[idx]}"" instead of "${op}"`);
        }
    }
    else {
        console.log(`${idx} SKIP: "${t.s}"`);
    }

});
