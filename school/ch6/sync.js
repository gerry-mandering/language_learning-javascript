const fs = require('fs');

console.log('start');
let data = fs.readFileSync('./readme2.txt');
console.log('number 1', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('number 2', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('number 3', data.toString());
console.log('end');