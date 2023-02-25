function solution(s) {
  let step = 0;
  let removeZeroCnt = 0;
  while (true) {
    if (s === "1") return [step, removeZeroCnt];
    let newS = "";
    step++;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        newS += "1";
      } else {
        removeZeroCnt++;
      }
    }
    newS = newS.length.toString(2);
    s = newS;
  }
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
