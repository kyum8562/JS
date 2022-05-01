const ul = document.getElementById('animals');
const li = document.querySelectorAll('ul li');
const two = document.getElementById('2');

[...li].forEach((e) =>{
    e.className = 'animal';
})
console.log(ul.children); // 자식들 
console.log(ul.childNodes); // 자식들 - 공백 텍스트 포함
console.log(ul.firstElementChild); // 첫번째자식
console.log(ul.firstChild); // 첫번째자식 - 공백 텍스트 포함
console.log(ul.lastElementChild); // 마지막자식
console.log(ul.lastChild); // 마지막자식 - 공백 텍스트 포함
console.log(ul.parentNode); // 부모노드
console.log(two.previousElementSibling); //이전형제노드
console.log(two.previousSibling); // 이전형제노드 - 공백 텍스트 포함
console.log(two.nextElementSibling); // 다음형제노드
console.log(two.nextSibling); // 다음형제노드 - 공백 텍스트 포함
console.log(two.nextSibling.nodeType); // 노드타입(1:요소,3:텍스트,9:문서)
console.log(two.nextElementSibling.nodeName); // 노드이름(태그이름 대문자 반환, 텍스트:#text, 문서:#document)

console.log(ul.nodeValue); // 텍스트 노드가 아닌 노드라면 null 반환(getter, setter 가능)
// console.log(ul.firstChild.nodeValue = 'world'); // 첫번째자식 - 공백 텍스트 포함

const btn = document.querySelector('button');
const handleClick = () => {
    console.log('hi');
}

btn.addEventListener('click', handleClick);
btn.addEventListener('click', handleClick);// 하나의 핸들러만 등록된다

console.log(`ul.hasChildNodes() : ${ul.hasChildNodes()}`);
