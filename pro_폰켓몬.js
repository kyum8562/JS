function solution(arr) {
  let hash = new Map();
  for (let i = 0; i < arr.length; i++) hash.set(arr[i]);
  for (const [key, value] of hash) console.log(`${key} : ${value}`);

  if (arr.length / 2 > hash.size) return hash.size;
  else return arr.length / 2;
}
function solution1(arr) {
  let mySet = new Map();
  for (let i = 0; i < arr.length; i++) {
    let tmp = mySet.get(arr[i]) > 0 ? mySet.get(arr[i]) + 1 : 1;
    mySet.set(arr[i], tmp);
  }
  for (const [key, value] of mySet) console.log(`${key} : ${value}`);
}

console.log(solution([3, 1, 2, 3]));
// console.log(solution([3, 3, 3, 2, 2, 4]));
// console.log(solution([3, 3, 3, 2, 2, 2]));
