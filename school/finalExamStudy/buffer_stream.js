// const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
// console.log('from()', buffer);
// console.log('length: ', buffer.length);
// console.log('toString()', buffer.toString());
//
// const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
// const buffer2 = Buffer.concat(array);
// console.log('concat(): ', buffer2.toString());
//
// const buffer3 = Buffer.alloc(5);
// console.log('alloc(): ', buffer3);

const fs = require('fs');

// const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16});
// const data = [];
//
// readStream.on('data', (chunk) => {
//     data.push(chunk);
//     console.log('data: ', chunk, chunk.length);
// });
// readStream.on('end', () => {
//     console.log('end: ', Buffer.concat(data).toString());
// });
// readStream.on('error', (err) => {
//     console.log('error: ', err);
// });

const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('함 번 더 씁니다.');
writeStream.end();
