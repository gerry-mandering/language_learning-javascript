function    allArithemics (x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3, b = 4;
allArithemics(a, b);

console.log(add(2, 7));

function    add(x, y) {
    return x + y;
}

const   subtraction = function (x, y) {
    return x - y;
}

console.log(subtraction(7, 2));

const   multi = (x, y) => x * y;

console.log(multi(2, 7));