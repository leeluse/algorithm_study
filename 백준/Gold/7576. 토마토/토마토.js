const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));

const queue = [];
let idx = 0;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}
while (idx < queue.length) {
  //   const [x, y] = queue.shift();
  const [x, y] = queue[idx++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= graph.length || ny >= graph[0].length)
      continue;
    if (graph[nx][ny] === 0) {
      graph[nx][ny] = graph[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

let max = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] > max) {
      max = graph[i][j];
    }
    if (graph[i][j] === 0) {
      return console.log(-1);
    }
  }
}

console.log(max - 1);
