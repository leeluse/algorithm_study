const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let result = [];

for (let i = 1; i <= N; i++) {
  back(i, 0, []);
}

function back(num, point, box) {
  if (box.length === num && box.reduce((sum, num) => sum + num) === M) {
    result.push(box);
    return;
  }
  for (let i = point; i < arr.length; i++) {
    back(num, i + 1, [...box, arr[i]]);
  }
}

console.log(result.length);