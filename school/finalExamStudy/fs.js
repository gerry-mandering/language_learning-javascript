const fs = require("fs");

// fs.readFile("./readme.txt", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// });

// fs.writeFile('./writeme.txt', '글이 입력됩니다.', (err) => {
//     if (err) {
//         throw err;
//     }
//     fs.readFile('./writeme.txt', (err, data) => {
//         if (err) {
//             throw err;
//         }
//         console.log(data.toString());
//     })
// })

// console.log('시작');
// fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('1번', data.toString());
// })
// fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('2번', data.toString());
// })
// fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('3번', data.toString());
// });
// console.log('끝');

// console.log('시작');
// let data = fs.readFileSync('./readme.txt');
// console.log('1번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('3번', data.toString());
// console.log('끝');


console.log('시작');
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme.txt', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('3번', data.toString());
        });
    });
});
console.log('끝');
