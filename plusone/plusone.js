function plusone(digits) {
    // Validations
    if(!digits) {
        return Infinity;
    }
    const dlen = digits.length;
    if (dlen < 1) {
        return Infinity;
    }
    if (dlen > 100) {
        return Infinity;
    }
    for (const d of digits) {
        if(d < 0 || d > 9 ){
            return Infinity;
        }
    }

    if (dlen === 1) {
        const onlydigit = digits[0];
        if (onlydigit === 9) {
            return [1, 0];
        }
        else {
            return [ onlydigit + 1]
        }
        
    }

    let result = [];
    let i = dlen - 1;
    let currentDigit = digits[i];
    if(currentDigit === 9) {
        while (i > 0 && currentDigit === 9) {
            currentDigit = digits[i];
            result.push(0);
            i--;
        }
        if(i === 0) {
            if(digits[0] === 9) {
                result.push(1);
            } else {
                result.push(digits[0] + 1);   
            }
            return result.reverse();
        }

    } else {
        result.push(currentDigit + 1)
    }



    result.push(...digits.splice(0, i ).reverse());

    if(digits[0] === 9) {
        result.push(1);
    }
    return result.reverse();
};

module.exports = { plusone };

