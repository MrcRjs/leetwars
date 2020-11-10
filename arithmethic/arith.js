
function zero() {
    // 1 receive parameter -> functionoperation
    // process the operation

    // 2 dont receive param -> return the number
    const outerNumber = 0;
    return arguments.length ? processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function one() {
    const outerNumber = 1;
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function two() {
    const outerNumber = 2;
    

    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function three() {
    const outerNumber = 3;
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function four() {
    const outerNumber = 4;
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function five() {
    const outerNumber = 5;
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function six() {
    const outerNumber = 6;
    
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function seven() {
    const outerNumber = 7;
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function eight() {
    const outerNumber = 8;
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}
function nine() {
    const outerNumber = 9;
    return arguments.length ?  processOperation({ outerNumber, ...arguments[0]}) : outerNumber;
}

function processOperation(values) {
    const { operation, innerNumber, outerNumber } = values;
    switch (operation) {
        case '+':
            return outerNumber + innerNumber;
        case '-':
            return outerNumber - innerNumber;
        case '*':
            return outerNumber * innerNumber;
        case '/':
            return Math.floor(outerNumber / innerNumber);
    }
}

function plus(innerNumber) {
    // receive the second/inner number
    // return operation symbol and the received number
    return { operation: '+', innerNumber };
}
function minus(innerNumber) {
    return { operation: '-', innerNumber };
}
function times(innerNumber) {
    return { operation: '*', innerNumber };
}
function dividedBy(innerNumber) {
    return { operation: '/', innerNumber };
}


module.exports = {
    zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy
}
