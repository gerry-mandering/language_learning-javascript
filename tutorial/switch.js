const   fingersOut = 2;

switch (fingersOut) {
    case 2:
        console.log('scissors');
        break;
    case 0:
        console.log('rock');
        break;
    case 5:
        console.log('paper');
        break;
    default:
        console.log('none');
}

const   direction = 'north';

const   directionKor = {
    north: '북',
    south: '남',
    east: '동',
    west: '서'
}[direction] ?? 'none'

console.log(directionKor);

let season = '';
const   month = 1;

switch (month) {
    case 1: case 2: case 3:
        season = '1Quoter';
        break;
    case 4: case 5: case 6:
        season = '2Quoter';
        break;
    case 7: case 8: case 9:
        season = '3Quoter';
        break;
    case 10: case 11: case 12:
        season = '4Quoter';
        break;
}

console.log(season);