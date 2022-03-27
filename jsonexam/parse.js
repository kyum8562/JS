// JSON.parse 메소드는 JSON 데이터를 가진 문자열을 객체로 변환한다.
/*
서버 -> 브라우저로 전송된 JSON 데이터는 문자열이다. 
이 문자열을 객체로서 사용하려면 객체화하여야 하는데 
이를 역직렬화(Deserializing)이라 한다. 역직렬화를 위해서 
내장 객체 JSON의 static 메소드인 JSON.parse를 사용한다.
*/

const o = { name: 'Lee', gender: 'male', age: 20 };

// 객체 => JSON 형식의 문자열(서버 -> 클라이언트, 데이터 전송)
const strObject = JSON.stringify(o);
console.log(typeof strObject, strObject);

// JSON 형식의 문자열 => 객체(받은 데이터를 객체화 == 역직렬화)
const obj = JSON.parse(strObject);
console.log(typeof obj, obj);
const arr = [1, 5, 'false'];

// 배열 객체 => 문자열(서버 -> 클라이언트, 데이터 전송)
const strArray = JSON.stringify(arr);
console.log(typeof strArray, strArray); 

// 문자열 => 배열 객체(받은 데이터를 객체화 == 역직렬화)
const objArray = JSON.parse(strArray);
console.log(typeof objArray, objArray);

const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ];

// 배열 => JSON 형식의 문자열(서버 -> 클라이언트, 데이터 전송)
const str = JSON.stringify(todos);
console.log(typeof str, str);

// JSON 형식의 문자열 => 배열
const parsed = JSON.parse(str);
console.log(typeof parsed, parsed);

/* 
XMLHttpRequest
브라우저는 XMLHttpRequest 객체를 이용해 Ajax 요청을 생성하고 전송한다.
서버가 브라우저 요청에 대해 응답을 반환하면 같은 XMLHttpRequest가 결과를 처리한다.
*/

// XMLHttpRequest 객체의 생성
const xhr = new XMLHttpRequest();
/*
open 메소드를 사용해 서버로 Ajax 요청(Request)을 준비한다.
XMLHttpRequest.open(method, url[, async])
method : 'GET', 'POST', 'PUT', 'DELETE' 등
url : 요청을 보낼 url
async : 비동기 조작여부. (default = true)
*/ 
xhr.open('GET', '/users');
/*
send 메소드를 사용해 서버로 Ajax 요청(Request)을 전달한다.
기본적으로 서버로 전송하는 데이터는 GET, POST 메소드에 따라 전송방식 차이가 있다.
GET 메소드 : URL의 일부분인 쿼리문자열로 데이터를 서버로 전송한다.
ㄴsend 메소드의 인수는 무시되고 request body은 null로 설정된다.
POST 메소드 : 데이터를 Request Body에 담아 전송한다.
// xhr.send('string');
// xhr.send(new Blob()); // 파일 업로드와 같이 바이너리 컨텐트를 보내는 방법
// xhr.send({ form: 'data' });
// xhr.send(document);
*/
xhr.send();

/*
setRequestHeader 메소드를 사용해 HTTP Request Header의 값을 설정한다.
반드시 open 메소드 호출 이후에 호출한다.
주로Request Header인 Content-type, Accept를 사용한다.
*/
