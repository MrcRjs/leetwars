function perimeter(n) {
    return 4 * fibsum(n + 1);
}

function fibsum(n) {
    if (n < 3) {
        return n;
    }
    // 1 1 2 3 5 8
    let sum = 2;
    let lastFib = 1;
    let lastlastFib = 1;
    
    for (let i = 3; i <= n; i++) {
        const nextFib = lastFib + lastlastFib;
        const aux = lastFib;
        sum += nextFib;
        lastFib = nextFib;
        lastlastFib = aux;
    }
    return sum;
}

module.exports = { perimeter, fibsum };
