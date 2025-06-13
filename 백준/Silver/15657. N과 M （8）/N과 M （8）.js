const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


const [N, M] = input[0].split(" ").map(Number);
const init = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const result = [];

function back(point, arr) {
  if (arr.length == M) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = point; i < N; i++) {
    back(i, [...arr, init[i]]);
  }
}
back(0, []);
console.log(result.join("\n"));