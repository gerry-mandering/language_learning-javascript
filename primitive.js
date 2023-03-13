let number1 = 1;
let string1 = 'ABC';
let bool1 = true;

let number2 = number1;
let string2 = string1;
let bool2 = bool1;

number2 = 2;
string2 = 'DEF';
bool2 = false;

console.log(number1, string1, bool1);
console.log(number2, string2, bool2);

const   obj1 = {
    num1: 1,
    str1: 'ABC',
    bool1: true
};

const   obj2 = obj1;

obj2.bool1 = false;

console.log(obj1);
console.log(obj2);