const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('Total Time');
console.log('Normal Log');
console.log(string, number, boolean);
console.error('error message');

console.dir(obj, { colors: false, depth: 2} );
console.dir(obj, { colors: true, depth: 1} );

console.time('Measure Time');
for (let i = 0; i < 100000; i++) {
    continue;
}
console.timeEnd('Measure Time');

function b() {
    console.trace('trace Error Location');
}

function a() {
    b();
}

a();

console.timeEnd('Total Time');