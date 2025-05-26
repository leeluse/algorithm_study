const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.slice(0, 2);
const arr = input.slice(2).map((i) => i.split(" ").map(Number));

const graph = Array.from({ length: n }, () => []);
for (let i = 0; i < m; i++) {
  const [a, b] = arr[i];
  graph[a - 1].push(b);
  graph[b - 1].push(a);
}

const stk = [1];
const visited = [];

while (stk.length > 0) {
  const node = stk.shift();
  if (!visited.includes(node)) {
    visited.push(node);
    for (const neighbor of graph[node - 1]) {
      if (!visited.includes(neighbor)) {
        stk.push(neighbor);
      }
    }
  }
}

console.log(visited.length - 1);
