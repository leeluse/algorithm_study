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

function back(arr) {
  if (arr.length == m) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    back([...arr, init[i]]);
  }
}

back([]);

const newRes = new Set(result);
console.log([...newRes].join("\n"));
