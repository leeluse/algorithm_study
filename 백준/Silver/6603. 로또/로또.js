const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const result = [];

  const [n, ...arr] = input[i].split(" ").map(Number);

  function back(point, box) {
    if (box.length == 6) {
      result.push(box.join(" "));
      return;
    }

    for (let i = point; i < n; i++) {
      back(i + 1, [...box, arr[i]], n);
    }
  }

  back(0, []);
  console.log(result.join("\n"));
  i !== input.length - 2 && console.log(" ");
}
