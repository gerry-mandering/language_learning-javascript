const timout = setTimeout(() => {
    console.log('execute after 1.5sec');
}, 1500);

const interval = setInterval(() => {
    console.log('execute every sec');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('not executed');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('execute immediately');
});

const immediate2 = setImmediate(() => {
    console.log('not executed');
});

clearImmediate(immediate2);