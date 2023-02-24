function solution(s) {
  let ans = 0;
  if (s[0] === ")") return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      ans++;
    } else {
      if (--ans < 0) return false;
    }
  }
  return ans === 0 ? true : false;
}
console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
