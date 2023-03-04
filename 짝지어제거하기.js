class Stack {
  constructor() {
    this.arr = [];
    this.idx = 0;
  }
  push(item) {
    this.arr[this.idx++] = item;
  }
  pop() {
    if (this.idx <= 0) return null;
    // this.arr[--this.idx] = null;
    const res = this.arr[--this.idx];
    this.arr.pop();
    return res;
  }
  peek() {
    return this.arr[this.idx - 1];
  }
}
function solution(s) {
  let stack = new Stack();
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (stack.peek() === s[i]) stack.pop();
    else stack.push(s[i]);
    console.log(stack);
  }
  return stack.idx === 0 ? 1 : 0;
}
console.log(solution("baabaa"));
console.log(solution("cdcd"));
