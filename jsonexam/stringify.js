const o = { name: 'Lee', gender: 'male', age: 20 };

// JSON.stringify 메소드는 객체를 JSON 형식의 문자열로 변환한다
const strObj = JSON.stringify(o);
// console.log(typeof strObj, strObj);

// 객체 => JSON 형식의 문자열 + prettify
const strPrettyObject = JSON.stringify(o, null, 2);
console.log(typeof strPrettyObject, strPrettyObject);

// replacer
// 값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value){
    // undefined: 반환하지 않음
    return typeof value === 'number' ? undefined : value;
}

// 객체 => JSON 형식의 문자열 + replacer + prettify
const strFilteredObject = JSON.stringify(o, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);

const arr = [1, 5, 'false'];
// 배열 객체 => 문자열
const strArray = JSON.stringify(arr);
// console.log(typeof strArray, strArray);

function replaceToUpper(key, value) {
    return value.toString().toUpperCase();
  }
  function replaceToUpper(key, value) {
  return value.toString().toUpperCase();
}

// 배열 객체 => 문자열 + replacer
const strFilteredArray = JSON.stringify(arr, replaceToUpper);
console.log(typeof strFilteredArray, strFilteredArray);