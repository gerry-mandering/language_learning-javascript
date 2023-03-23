let arrowFunction = () => {
    console.log('first line');
    console.log('second line');
};

arrowFunction();
console.log(arrowFunction);

let arrowFunction2 = (x, y) => x + y;
let arrowFunction3 = (x, y) => {
    let mul;

    mul = x * y;
    return mul;
}

console.log(arrowFunction2(1, 2));
console.log(arrowFunction3(1, 2));