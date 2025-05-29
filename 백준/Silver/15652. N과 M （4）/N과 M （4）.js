const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
const result = [];

function backtracking(point, arr) {
  if (arr.length == m) {
    result.push(arr);
    return;
  }
  for (let i = point; i <= n; i++) {
    backtracking(i, [...arr, i]);
  }
}

backtracking(1, []);
console.log(result.map((arr) => arr.join(" ")).join("\n"));
