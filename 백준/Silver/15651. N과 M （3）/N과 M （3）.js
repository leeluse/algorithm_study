const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
const result = [];

function back(arr) {
  if (arr.length === m) {
    result.push(arr);
    return;
  }

  for (let i = 1; i <= n; i++) {
    back([...arr, i]);
  }
}

back([]);
console.log(result.map((arr) => arr.join(" ")).join("\n"));
