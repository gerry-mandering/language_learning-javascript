function    addNumber (a, b) {
    return a + b;
}

console.log(typeof addNumber);

console.log(addNumber);

console.log(addNumber instanceof Object);

function    isOddNum(number) {
    console.log((number % 2 ? 'Odd' : 'Even') + 'Number');
    return number % 2 ? true : false;
}

const   checkIfOdd = isOddNum;

console.log(checkIfOdd(3));

let arithmetics = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
]

for (const key of arithmetics) {
    console.log(key(1, 3));
}

let list = [1, 2, 3, 4, 5];

function    doInArray(array, func) {
    for (item of array) {
        func(item);
    }
}

doInArray(list, console.log);

function doNTimes(func, repeat, x, y) {
    let result = x;

    for (let i = 0; i < repeat; i++) {
        result = func(result, y);
    }
    return result;
};

console.log(
    doNTimes((x, y) => x * y, 3, 5, 2),
    doNTimes((x, y) => x / y, 3, 5, 2)
);