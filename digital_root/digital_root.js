function digital_root (n) {
    if(n < 10){
        return n;
    } 
    const sum = n.toString().split('').reduce((total, n) => total + +n, 0);
    return digital_root(sum);
}

module.exports = { digital_root };

