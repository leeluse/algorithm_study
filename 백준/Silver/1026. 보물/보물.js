const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);

const sortedB = arrB.sort((a, b) => b - a);
const sortedA = arrA.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += sortedA[i] * sortedB[i];
}

console.log(sum);

