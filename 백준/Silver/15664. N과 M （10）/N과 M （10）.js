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

function back(point, arr) {
  if (arr.length === m) {
    result.push(arr.join(" "));
    return;
  }
  for (let i = point; i < n; i++) {
    back(i + 1, [...arr, init[i]]);
  }
}
back(0, []);

const newRes = new Set(result);

console.log([...newRes].join("\n"));
