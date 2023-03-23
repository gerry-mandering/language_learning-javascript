let array = ['apple', 'pair', 'grape', 'strawberry', 'banana'];

for (let i in array) {
    console.log(`${i}th element is ${array[i]}`);
}

console.log("====================");

for (let item of array) {
    console.log(item);
}