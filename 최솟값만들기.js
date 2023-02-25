function solution(A, B) {
  let minAns = Number.MAX_SAFE_INTEGER;
  let tmp = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // for (let i = 0; i < A.length; i++) {
  //   tmp += A[i] * B[i];
  // }

  return A.reduce((ans, val, idx) => ans + val * B[idx], 0);
  return tmp;
}
console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
