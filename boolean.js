let a = 1 === 2;
let b = 'abc' !== 'def';
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(
    1.23 ? true : false,
    -999 ? true : false,
    '0' ? true : false,
    ' ' ? true : false,
    Infinity ? true : false,
    -Infinity ? true : false,
    {} ? true : false,
    [] ? true : false
);

console.log (
    1.23 == true,
    ' ' == true,
    {} == true
);

console.log(
    0 ? true : false,
    -0 ? true : false,
    '' ? true : false,
    null ? true : false,
    undefined ? true : false,
    NaN ? true : false
);