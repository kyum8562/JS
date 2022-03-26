/*
1.동일한 값을 중복하여 포함할 수 있다
2.요소 순서에 의미가 있다
3.인덱스로 요소에 접근할 수 있다
세 가지 모두 배열에서는 가능하지만 set 객체에서는 불가능하다
*/
const set = new Set();
const arr = new Array();
console.log(set);
console.log(arr);

// set 생성자 함수는 이터러블을 인수로 전달받아 set 객체를 생성한다.(중복된 값은 저장되지 않는다)
const set1 = new Set([1, 2, 3, 3]);
console.log(set1);

const set2 = new Set(['hello']);
console.log(set2);

//중복을 허용하지 않는 set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

const uniq2 = array =>[...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

//set 객체의 요소 개수를 확인할 때는 Set.prototype.size 프로퍼티를 사용한다.
const { size } = new Set([1, 2, 3, 3]);
console.log(size);

// /*size 프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티이다.
//   따라서 size 프로퍼티에 숫자를 할당하여 set 객체의 요소 개수를 변경할 수 없다.*/

// const set3 = new Set([1, 2, 3]);
// console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));

// set3.size = 10;
// console.log(set3.size);

//set 객체에 요소 추가하기
const set4 = new Set();

/*add 메서드를 연속적으로 호출할 수 있다.
  set 객체에 중복된 요소의 추가는 허용되지 않는다.*/
set4.add(1).add(2).add(2);
console.log(set4);

// set 객체에 특정 요소가 존재하는지 확인하려면 has 메소드 사용한다
console.log(set4.has(2));
console.log(set4.has(4));

/* 요소 삭제 delete 
 만약, 존재하지 않는 set 객체의 요소를 삭제할 경우 에러없이 무시된다.
 연속적으로 호출 불가능*/
set4.delete(2);
set4.delete(4);
console.log(set4);

const set5 = new Set();
console.log(NaN === NaN);
console.log(0 === -0);
set5.add(NaN).add(NaN);
set5.add(0).add(-0);
console.log(set5);

// set 객체는 객체나 배열과 같이 js의 모든값을 요소로 저장할 수 있다.
const set6 = new Set();
set6
    .add(1)
    .add('a')
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(() => {});
    
console.log(set6);

// 모든 요소를 일괄적으로 삭제 => clear
set6.clear();
console.log(set6);






