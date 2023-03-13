let x = 1, y = 2, z = 3;

console.log(x, y, z);
console.log(
    (++x, y += x, z *= y)
);