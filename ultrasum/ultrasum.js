function digital_root(n) {
    const digits = `${n}`.split('');
    const sumOfDigits = digits.reduce((acc, curr) => acc + (+curr), 0);
    const result = `${sumOfDigits}`.split('');
    if(result.length === 1) {
        return sumOfDigits;
    }
    else{
        return digital_root(sumOfDigits);
    }
}

module.exports = { digital_root };