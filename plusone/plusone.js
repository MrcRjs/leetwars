function plusone(digits) {
    // Validations
    // if(!digits) {
    //     return Infinity;
    // }
    const dlen = digits.length;
    // if (dlen < 1) {
    //     return Infinity;
    // }
    // if (dlen > 100) {
    //     return Infinity;
    // }
    // for (const d of digits) {
    //     if(d < 0 || d > 9 ){
    //         return Infinity;
    //     }
    // }

    // // If its only one digit
    // if (dlen === 1) {
    //     const onlydigit = digits[0];
    //     if (onlydigit === 9) {
    //         return [1, 0];
    //     }
    //     else {
    //         return [ onlydigit + 1]
    //     }
        
    // }

    let result = [];
    let extra = 1;
    let i = 0;
    const reversed = digits.reverse();
    for(d of reversed) {
        if(extra && d === 9) {
            result.push(0);
            extra = 1;
            i++;
            if(i === dlen) {
                result.push(1);
            }
        } else {
            result.push(d + extra);
            extra = 0;
        }
    }
    return result.reverse();
};

module.exports = { plusone };

