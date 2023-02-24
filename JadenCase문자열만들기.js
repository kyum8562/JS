// function solution(s) {
//     let answer = "";
//     const arr = s.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//       let t = "";
//       for (let j = 0; j < arr[i].length; j++) {
//         let temp = arr[i][j];
//         if (j === 0 && typeof temp === "string") {
//           t += arr[i][j].toUpperCase();
//         } else {
//           t += arr[i][j].toLowerCase();
//         }
//       }
//       if (i !== arr.length - 1) answer += t + " ";
//       else answer += t;
//     }
//     return answer;
//   }
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
