const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const result = [];
  
  function back(start, arr) {
    if (arr.length === m) {
      result.push(arr);
      return;
    }
  
    for (let i = start; i <= n; i++) {
      if (!arr.includes(i)) {
        back(i + 1, [...arr, i]);
      }
    }
  }
  
  back(1, []);
  console.log(result.map((arr) => arr.join(" ")).join("\n"));
  