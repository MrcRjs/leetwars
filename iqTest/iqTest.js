const iqTest = (numbers) => {
    const odd = [];
    const even = [];
    const numArr = numbers.split(' ').map(n => {
        if (+n % 2 === 0) {
            even.push(n);
        } else {
            odd.push(n);
        }
        return n;
    });
    
    if(odd.length === 1) {
        return numArr.indexOf(odd[0]) + 1;
    } else {
        return numArr.indexOf(even[0]) + 1;
    }
};

const iqTestV2 = (numbers) => {
    const numArr = numbers.split(' ');

    let odd = { count: 0, index: 0 };
    let even = { count: 0, index: 0 };

    let i = 0;
    for (const n of numArr) {
        i += 1;
        if (n % 2 === 0) {
            even.count++;
            even.index = i;
        } else {
            odd.count++;
            odd.index = i;
        }

        if(even.count > 1 && odd.count === 1) {
            return odd.index;
        }
        
        if(odd.count > 1 && even.count === 1) {
          return even.index;
      }
    }
    
}

/************************************/
/*          TEST SUITE              */
/************************************/

const tests = [
    {
        numbers: "2 1 1 1",
        expected: 1
    },
    {
        numbers: "2 4 7 8 10",
        expected: 3
    },
    {
        numbers: "1 2 1 1",
        expected: 2
    },
    {
      numbers: "1 1 1 2",
      expected: 4
    }
]

for (const t of tests) {
    const result = iqTestV2(t.numbers);
    if(result === t.expected) {
        console.log(`CORRECT: ${t.expected}`);
    } else {
        console.log(`ERROR: ${t.expected} got ${result} `)
    }
}

