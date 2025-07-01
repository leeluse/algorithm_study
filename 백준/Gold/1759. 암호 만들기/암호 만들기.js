const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


const [n, m] = input[0].split(" ").map(Number);
const init = input[1].split(" ").sort();
const result = [];

function back(point, arr) {
  if (arr.length === n) {
    const newArr = [...arr].filter(
      (v) => !["a", "e", "i", "o", "u"].includes(v)
    );

    if (
      ["a", "e", "i", "o", "u"].some((v) => arr.includes(v)) &&
      newArr.length >= 2
    ) {
      result.push(arr.join(""));
    }
    return;
  }

  for (let i = point; i < m; i++) {
    back(i + 1, [...arr, init[i]]);
  }
}

back(0, []);

console.log(result.join("\n"));
