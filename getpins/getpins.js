function getpins (observed) {
    const digits = observed.split("");

    if(digits.length === 1) {
        return getAdjacent(parseInt(digits[0]))
    }

    const allNums = digits.map(d => getAdjacent(parseInt(d)));

    const allPins = getCombinations(allNums);

    return Array.from(allPins);

}

function getCombinations(arr) {
    let combs = new Set();

    let allBases = arr.map(a => a.length);

    const ct = new Counter(allBases);

    let count = ct.getCount();
    let i = 0;
    // prevent infinite loop
    while(count && i < 1000)
    {
        let comb = '';
        count.forEach((c, i) => {
            comb += arr[i][c];
        });
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
    constructor(arr) {
        // We are gonna use an arr with a different base for each element
        this.counter = new Array(arr.length).fill(0);
        this.bases = arr;
    }
    getCount() {
        return this.counter;
    }
    increment() {
        let inc = 1;
        let  i = this.counter.length - 1;
        while(inc && i >= 0) {
            const base = this.bases[i];
            if(i === 0 && this.counter[0] === base - 1){
                // last element
                return null;
            }
            else if(this.counter[i] === base - 1) {
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

/* 
observed = "11"
observed.split('') // 1.- [1,1]
      .map(d => adjacent[d|0]) // 2.- [[1,2,4],[1,2,4]]
      .reduce((pa, da) => { 
        return da.reduce((pv, d) => {
            console.log(pv)
          return pv.concat(pa.map( p  => '' + p + d)); // 3.- 
        }, []);
      }, ['']);

*/

module.exports = { getpins };

