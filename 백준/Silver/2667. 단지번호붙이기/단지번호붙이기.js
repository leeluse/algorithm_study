const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.slice(0, 1);
const arr = input.slice(1).map((i) => i.split("").map(Number));

const graph = Array.from({ length: n }, () => []);
for (let i = 0; i < arr.length; i++) {
  graph[i].push(...arr[i]);
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => 0)
);

const queue = [];
const result = [];

for (let i = 0; i < graph.length; i++) {
  const node = graph[i];
  for (let j = 0; j < node.length; j++) {
    if (node[j] !== 0 && visited[i][j] === 0) {
      visited[i][j] = 1;
      queue.push([i, j]);
      const cnt = bfs();

      result.push(cnt);
    }
  }
}

function bfs() {
  let count = 0;
  while (queue.length > 0) {
    count++;
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (graph[nx][ny] === 1 && visited[nx][ny] !== 1) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  return count;
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));
