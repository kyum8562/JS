var fs = require("fs");
var input = fs.readFileSync("test.txt").toString().split("");
let num = input.length - 1;
for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[num]) {
    console.log(0);
    return;
  } else {
    num--;
  }
}
console.log(1);
