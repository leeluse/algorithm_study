const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [h, w, n, m] = input[0].split(" ").map(Number);
let count = 0;

for (let i = 0; i < h; i += n + 1) {
  for (let j = 0; j < w; j += m + 1) {
    count++;
  }
}
console.log(count);