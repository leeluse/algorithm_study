const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const arr = i.toString().split("").map(Number);
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (i + sum === num) {
    return console.log(i);
  }
}
console.log(0);
