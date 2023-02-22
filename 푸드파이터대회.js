function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    food[i] = parseInt(food[i] / 2);
    if (food[i] >= 1) answer += `${i}`.repeat(food[i]);
  }
  answer += "0";
  for (let i = food.length; i >= 1; i--) {
    if (food[i] >= 1) answer += `${i}`.repeat(food[i]);
  }

  return answer;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
