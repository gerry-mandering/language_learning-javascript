//블록스코프의 개념
if (true) {
    var x = 3;       //var로 선언된 변수는 함수 스코프를 가짐
}
console.log(x);

if (true) {
    const y = 3;    //const, let으로 선언된 변수는 블록 스코프를 가짐
}
console.log(y);