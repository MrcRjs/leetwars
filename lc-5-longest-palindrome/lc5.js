/**
 * @param {string} s
 * @return {string}
 */
let i = 0;

var longestPalindrome = function(s) {
    let start = 0;
    let substr = "";
    let max = 1;

    if (s === "" || s.length === 1) {
        return s;
    }
    for (let size = s.length; size > 1; size--) {
        const palindrome = getPalindromesBySize(size, s);
        if (palindrome) {
            return palindrome;
        }
    }

    // If no palindromes we just return the first charachter
    return s[0];
};

function getPalindromesBySize(size, s) {
    if (size < 2) {
        return null;
    }
    let start = 0;
    let end = size;
    while (end <= s.length) {
        i++;
        const substr = s.slice(start, end);
        if (s.includes(substr.split("").reverse().join(""))) {
            console.log(i);
            return substr;
        }
        else {
            start++;
            end++;
        }
    }
    return null;
}

// const skip = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
const skip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tests = ["leonnoel", " ", "", "---123asd", "aaaaa", "baaaa", "aaab", "aaabbb", "pwwkew", "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"];
const expect = ["leonnoel", " ", "", "---", "aaaaa", "aaaa", "aaa", "aaa", "ww", "fklkf"];

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
