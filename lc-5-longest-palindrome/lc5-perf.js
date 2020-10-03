/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if (!s || s < 2) {
        return s;
    }
    if (isPalindrome(s)) {
        return s;
    }
    let max = s[0];
    for (let idx = 1; idx < s.length - Math.floor(max.length / 2); idx++) {
        let longPal = currentLongestPalindrome(idx, s, max.length);
        if (longPal.length > max.length) {
            max = longPal;
        }
    }
    return max;
};

function currentLongestPalindrome(center,s, minPalSize) {
    let side = Math.ceil(minPalSize / 2);
    let longestPal = "";
    do {
        const subEven = s.slice(center - side, center + side);
        const subOdd = s.slice(center - side, center + side + 1);
        if (isPalindrome(subOdd)) {
            longestPal = subOdd;
            side++;
        }
        else if (isPalindrome(subEven)) {
            longestPal = subEven;
            side++;
        }
        else {
            return longestPal;
        }
    } while (center - side >= 0);
    return longestPal;

}

function isPalindrome(s) {
    return s === s.split("").reverse().join("");
}

//const skip = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tests = ["abcba", "leonnoel", " ", "", "---123asd", "aaaaa", "baaaa", "aaab", "aaabbb", "pwwkew", "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"];
const expect = ["abcba", "leonnoel", " ", "", "---", "aaaaa", "aaaa", "aaa", "aaa", "ww", "fklkf"];

tests.forEach((t, idx) => {
    if (!skip[idx]) {
        const op = longestPalindrome(t);
        if (op === expect[idx]) {
            console.log(`${idx} PASS:  "${t}" pal = "${op}"`);
        }
        else {
            console.log(`${idx} ERROR:  "${t}" Expected "${expect[idx]}"" instead of "${op}"`);
        }
    }
    else {
        console.log(`${idx} SKIP: "${t}"`);
    }

});
