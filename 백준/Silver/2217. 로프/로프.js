const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let max = 0;
const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

const sortedArr = arr.sort((a, b) => a - b);
while (arr.length > 0) {
  const len = arr.length;
  const node = arr.shift();
  if (node * len > max) {
    max = node * len;
  }
}

console.log(max);
