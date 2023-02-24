// function solution(s) {
//   let arr = s.split(" ").map((el) => parseInt(el));
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }

//   return min + " " + max;
// }
function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
