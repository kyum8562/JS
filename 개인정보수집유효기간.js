function solution(today, terms, privacies) {
  let ans = [];
  let [year, month, date] = today.split(".").map((val) => parseInt(val));
  let todayCount = year * 12 * 28 + month * 28 + date;

  // terms 처리
  const map = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [type, term] = terms[i].split(" ");
    map.set(type, parseInt(term) * 28);
  }

  // privacies 처리
  for (let i = 0; i < privacies.length; i++) {
    let [a, b] = privacies[i].split(" ");
    let [Y, M, D] = a.split(".").map((val) => parseInt(val));
    let compareDataCount = Y * 12 * 28 + M * 28 + D - 1;
    if (todayCount > map.get(b) + compareDataCount) ans.push(i + 1);
  }

  return ans;
}

// function solution(today, terms, privacies) {
//   let answer = [];
//   let newToday = parseInt(today.slice(0, 4)) * 12 * 28 + parseInt(today.slice(5, 7)) * 28 + parseInt(today.slice(8, 10));
//   console.log(newToday);
//   let privaciesLeft = [];
//   let privaciesRight = [];
//   let termsLeft = [];
//   let termsRight = [];

//   for (let i = 0; i < privacies.length; i++) {
//     privaciesLeft[i] = privacies[i].slice(0, 11);
//     privaciesRight[i] = privacies[i].slice(11, 12);
//   }

//   // 전체 코드를 가지고 맨앞 자르고 나머지 해결
//   for (let i = 0; i < terms.length; i++) {
//     termsLeft[i] = terms[i].slice(0, 1);
//     termsRight[i] = parseInt(terms[i].slice(2, 5));
//   }

//   for (let i = 0; i < privaciesLeft.length; i++) {
//     let temp = parseInt(privaciesLeft[i].slice(0, 4)) * 12 * 28 + parseInt(privaciesLeft[i].slice(5, 7)) * 28 + parseInt(privaciesLeft[i].slice(8, 10)) - 1;
//     let tgt = privaciesRight[i];
//     for (let j = 0; j < termsLeft.length; j++) {
//       if (tgt === termsLeft[j]) temp += termsRight[j] * 28;
//     }
//     if (newToday > temp) answer.push(i + 1);
//   }

//   return answer;
// }

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));
// console.log(solution([3, 3, 3, 2, 2, 4]));
// console.log(solution([3, 3, 3, 2, 2, 2]));
