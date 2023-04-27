function  add(a = 1, b = 4) {
    console.log (`${a} + ${b}`);
    return a + b;
}

console.log(
    add(),
    add(1),
    add(1, 3)
);