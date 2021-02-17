function getpins (observed) {

    const digits = observed.split("");

    const allNums = new Set();
    for (const d of digits) {
        const adj = getAdjacent(parseInt(d));
        for(const a of adj){
            allNums.add(a)
        }
    }

    if(digits.length === 1) {
        return Array.from(allNums)
    }

    const allPins = getCombinations(Array.from(allNums));

    return Array.from(allPins);

}

function getCombinations(arr) {
    let combs = new Set();

    const ct = new Counter(arr.length);


    let count = ct.getCount();
    let i = 0;
    while(count && i < 100)
    {
        const comb = count.map(c => arr[c]).join('');
        combs.add(comb); 
        count = ct.increment();
        i++;
    }

    return combs;
}
function getAdjacent(num) {
    const adjacents = [
        ["0", "8"],
        ["1", "2","4"],
        ["2", "1","5","3"],
        ["3", "2","6"],
        ["4", "1","5","7"],
        ["5", "2","4","6","8"],
        ["6", "3","5","9"],
        ["7", "4","8"],
        ["8", "0","5","7","9"],
        ["9", "6","8"]
    ]
    return adjacents[num];
}

class Counter {
    constructor(len) {
        this.counter = new Array(len - 1).fill(0);
        this.base = len;
    }
    getCount() {
        return this.counter;
    }
    increment() {
        let inc = 1;
        let  i = this.counter.length - 1;
        while(inc && i >= 0) {
            if(i === 0 && this.counter[0] === this.base - 1){
                // last element
                return null;
            }
            else if(this.counter[i] === this.base - 1) {
                this.counter[i] = 0;
                i--;
            } else {
                this.counter[i]++;
                inc = 0;
            }
        }
        return this.counter;
    }

}

module.exports = { getpins };

