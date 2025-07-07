const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
const arr = [];
let count = 0;
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => b - a);

for (const money of arr) {
  if (m - money >= 0) {
    count += Math.floor(m / money);
    m = m % money;
  }
}
console.log(Math.floor(count));
