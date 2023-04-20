const timeout = setTimeout(() => {
    console.log('Excute after 1.5 sec');
}, 1500);

const interval = setInterval(() => {
    console.log('Excute every 1 sec');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('It Doesn\'t Execute');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('Excute Immediately');
});

const immediate2 = setImmediate(() => {
    console.log('It Doesn\'t Execute');
});

clearImmediate(immediate2);