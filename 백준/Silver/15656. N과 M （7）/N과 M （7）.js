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

function back(arr) {
  if (arr.length == M) {
    // console.log(arr.join(" "));
    result.push(arr.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    back([...arr, init[i]]);
  }
}
back([]);
console.log(result.join("\n"));
