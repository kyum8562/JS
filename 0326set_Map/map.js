/*
Map 객체는 키, 값이 쌍으로 이루어진 컬렉션이다.
Map 객체는 객체와 유사하지만 다음과 같은 차이가 있다.
중복된 키를 갖는 엘리먼트가 존재하면 값이 덮어써진다.
set을 이용해서 엘리먼트를 추가한다.
*/
const map = new Map();
console.log(map);

const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
// Map객체의 엘리먼트 개수확인
const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(`size: ${size}`);
map1.set('key3', 'value3').set('key3', 'value3').set('key4', 'value4');
console.log(map1);

// Map 객체는 객체를 포함한 모든 값을 키로 사용할 수 있다.
const map2 = new Map();
const lee = {name: 'Lee'};
const kim = {name: 'Kim'};

// set 메소드 : 엘리먼트 삽입, 연속호출 OO
map2.set(lee, 'designer');
map2.set(kim, 'developer');
console.log(map2);

// get 메소드 : 키를 전달하면 값을 반환한다.
console.log(map2.get(lee));

// has 메소드 : 특정 요소의 존재 여부를 나타내는 불리언 값을 반환한다.
console.log(map2.has(lee));

// 엘리먼트 순회
map2.forEach((v, k, map) => console.log(v, k, map));

// Map 객체는 이터러블 이므로, 스프레드 문법의 대상이 될 수 있다.
console.log([...map2]);

// Map 객체는 이터러블 이므로, 디스트럭처링 할당의 대상이 될 수 있다.
const [a, b] = map2;
console.log(a, b);

// Map 객체는 이터러블 이므로, for ... of 문으로 순회할 수 있다.
for(const key of map2.keys()){
    console.log(key);
}
for(const value of map2.values()){
    console.log(value);
}
for(const entry of map2.entries()){
    console.log(entry);
}
for(const a of map2){
    console.log(a);
}
// delete 메소드 : 엘리먼트 삭제 ... 만약 존재하지 않는 키로 삭제할 경우 에러없이 무시된다. 연속호출 XX
map2.delete(kim);
console.log(map2);

// clear 메소드 : 엘리먼트 일괄삭제
map2.clear();
console.log(map2);

