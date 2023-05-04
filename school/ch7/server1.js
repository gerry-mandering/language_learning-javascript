const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.write('<strong>Hello Node!</strong>');
  res.end('<p>Hello Server!</p>');
}).listen(8080, () => { // 서버 연결 8080 == TCP 포트번호 / 8080, 옆에 아이피 주소 입력가능
  console.log('8080번 포트에서 서버 대기 중입니다!');
});

// http://127.0.0.1:8080 == 루프백 주소
// localhost:8080

//HTTP 포트는 80
//Telnet 포트는 23
//FTP서버 포트는 21
//well-known 포트 <= 1024