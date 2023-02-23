function solution(survey, choices) {
  let answer = "";
  let mbtiarr = ["R", "T", "C", "F", "J", "M", "A", "N"];
  let choicesNew = [0, 3, 2, 1, 0, 1, 2, 3];
  let hashMap = new Map();
  for (let i = 0; i < mbtiarr.length; i++) hashMap.set(mbtiarr[i] + "", 0);

  for (let i = 0; i < survey.length; i++) {
    let tgt = survey[i].split("");
    if (choices[i] >= 5) {
      hashMap.set(tgt[1], hashMap.get(tgt[1]) + choicesNew[choices[i]]);
    } else if (choices[i] < 5) {
      hashMap.set(tgt[0], hashMap.get(tgt[0]) + choicesNew[choices[i]]);
    }
  }

  hashMap.get("R") >= hashMap.get("T") ? (answer += "R") : (answer += "T");
  hashMap.get("C") >= hashMap.get("F") ? (answer += "C") : (answer += "F");
  hashMap.get("J") >= hashMap.get("M") ? (answer += "J") : (answer += "M");
  hashMap.get("A") >= hashMap.get("N") ? (answer += "A") : (answer += "N");

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
