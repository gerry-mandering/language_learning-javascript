const url = require('url');
const querystring = require('querystring');
const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&ca tegory=javascript');

const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));
console.log('querystring.toString():', querystring.toString(query));