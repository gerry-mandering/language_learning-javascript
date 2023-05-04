// process.on('uncaughtException', (err) => {
//     console.error('unexpected Error', err);
//     console.log('server1 error');
// });

setInterval(() => {
    throw new Error('I will kill the Server!!');
}, 1000);

// setTimeout(() => {
//     console.log('Execution');
// }, 2000);


//가운데 setInterval 만 살려두고 나머지를 주석처리하면 한번만 돔
//다 주석 살려두면 에러가 발생하는 순간 process.on('uncaughtException')으로 다 잡혀서 계속 반복되게 된다.