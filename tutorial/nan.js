let x = 1 / 'abc';
let y = 2 * '가나다';
let z = NaN;

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

console.log(
    x,
    x == NaN,
    x === NaN,
    isNaN(x),
    Number.isNaN(x)
);