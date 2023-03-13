const   winners = [12, 592, 7, 48];
const   weekdays = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];

const   randoms = ['minseok', -24, true, null];

console.log(typeof winners);
console.log(typeof weekdays);
console.log(typeof randoms);

console.log(winners, weekdays, randoms);

console.log(winners.length);

winners.push(10);
winners.pop();

console.log(winners);

const   person2 = {
    name: 'minseok',
    age: 23,
    language: ['Korean', 'English', 'French'],
    education: {
        school: 'korea',
        major: ['Computer Science', 'Mathmatics'],
        graduated: true,
    }
};

console.log(person2);
console.log(person2.education.major[1]);