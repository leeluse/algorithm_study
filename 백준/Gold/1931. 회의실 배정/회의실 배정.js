const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
const arr = [];
let count = 0;
let prev = [0, 0];

for (let i = 1; i <= num; i++) {
  const [n, m] = input[i].split(" ").map(Number);
  arr.push([n, m]);
}


arr.sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

for (let i = 0; i < arr.length; i++) {
  const [a, b] = arr[i];
  const [prevA, prevB] = prev;
  if (a < prevA || a < prevB) continue;
  prev = [a, b];
  count++;
}

console.log(count);
