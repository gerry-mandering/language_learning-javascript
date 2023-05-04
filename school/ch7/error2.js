const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);

// fs.unlink는 비동기로 작동함 try catch문으로 감싸지 않아도 자체적으로 반복되도록함