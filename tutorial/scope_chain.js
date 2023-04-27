let a = 0;
let b = 1;
let c = 2;
console.log('time1', a, b, c);

{
    let a = 'A';
    let b = 'B';
    console.log('time2', a, b ,c);

    {
        let a = '$';
        console.log('time3', a, b, c);
    }

    console.log('time4', a, b, c);
}

console.log('time5', a, b, c);