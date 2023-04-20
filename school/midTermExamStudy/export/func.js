const { odd, even } = require('./var');

function checkOddOrEven(number) {
    if (number % 2 == 0)
        return(even);
    else
        return(odd);
}

module.exports = checkOddOrEven;