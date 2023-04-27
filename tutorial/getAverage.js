function getAverage() {
    let result = 0;

    for (const num of arguments) {
        result += num;
    }

    return result / arguments.length;
}

console.log(
    getAverage(1, 4, 7),
    getAverage(23, 312, 123, 123)
);