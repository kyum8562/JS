// function solution(n,a=n+1) {
//   return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
// }
function solution(n) {
  let answer = n;
  let currChange2Num = n.toString(2);
  let currOneCnt = 0;
  for (let i = 0; i < currChange2Num.length; i++) {
    if (currChange2Num[i] === "1") currOneCnt++;
  }
  while (true) {
    answer++;
    let nextOneCnt = 0;
    let nextchange2Num = answer.toString(2);
    for (let i = 0; i < nextchange2Num.length; i++) {
      if (nextchange2Num[i] === "1") nextOneCnt++;
    }
    if (currOneCnt === nextOneCnt) {
      return answer;
    }
  }
}
console.log(solution(15));
console.log(solution(78));
