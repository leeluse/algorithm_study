const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const [a, b] = input[1].split(" ").map(Number);
const m = Number(input[2]);
const arr = input.slice(3).map((i) => i.split(" ").map(Number));

const graph = Array.from({ length: n }, () => []);

for (let i = 0; i < arr.length; i++) {
  const [x, y] = arr[i];
  graph[y - 1].push(x);
  graph[x - 1].push(y);
}

const queue = [[a, 1]];
const visited = Array(n + 1).fill(0);

while (queue.length > 0) {
  const [node, cnt] = queue.shift();

  if (visited[node - 1] === 0) {
    visited[node - 1] = 1;
    for (let neighbor of graph[node - 1]) {
      if (neighbor === b) {
        console.log(cnt);
        return;
      } else {
        queue.push([neighbor, cnt + 1]);
      }
    }
  }
}

console.log(-1);
