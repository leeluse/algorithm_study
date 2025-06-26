const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const init = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const result = [];
const visited = Array(n).fill(false);

function back(arr) {
  if (arr.length === m) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    back([...arr, init[i]]);
    visited[i] = false;
  }
}

back([]);
const newResult = new Set(result);
console.log([...newResult].join("\n"));
