const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const result = [];

function backtracking(point, arr) {
  if (arr.length === m && !result.includes(arr)) {
    result.push(arr);
    return;
  }
  for (let i = point; i < n; i++) {
    if (arr.length > 0 && arr.includes(list[i])) continue;
    backtracking(i, [...arr, list[i]]);
  }
}

backtracking(0, []);
console.log(result.map((arr) => arr.join(" ")).join("\n"));
