function solution(n, words) {
  let lastEle = "";
  let firstEle = "";
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === words[i]) return [(i % n) + 1, parseInt(i / n + 1)];
    }
    // arr가 0보다 크고 arr의 마지막 단어의 마지막 글자와 현재 글자의 first 글자가 동일할 경우
    firstEle = words[i][0];
    if (arr.length > 0 && lastEle === firstEle) {
      // 마지막 글자 바꾸기
      lastEle = words[i][words[i].length - 1];
      arr[i] = words[i];
    } else if (arr.length > 0 && lastEle !== firstEle) {
      return [(i % n) + 1, parseInt(i / n + 1)];
    } else {
      lastEle = words[i][words[i].length - 1];
      arr[i] = words[i];
    }
  }
  return [0, 0];
}
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));
