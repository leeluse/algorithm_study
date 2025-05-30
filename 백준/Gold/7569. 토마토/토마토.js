const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, h] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i < input.length; i += m) {
  graph.push(input.slice(i, i + m).map((arr) => arr.split(" ").map(Number)));
}
const queue = [];
const dz = [0, 0, 0, 0, -1, 1];
const dx = [0, 0, -1, 1, 0, 0];
const dy = [-1, 1, 0, 0, 0, 0];
let idx = 0;

for (let i = 0; i < h; i++) {
  for (let j = 0; j < m; j++) {
    for (let k = 0; k < n; k++) {
      if (graph[i][j][k] === 1) {
        queue.push([i, j, k]);
      }
    }
  }
}

while (idx < queue.length) {
  const [z, x, y] = queue[idx++];
  for (let i = 0; i < 6; i++) {
    const nz = dz[i] + z;
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (nz < 0 || nz >= h || nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
    if (graph[nz][nx][ny] === 0) {
      graph[nz][nx][ny] = graph[z][x][y] + 1;
      queue.push([nz, nx, ny]);
    }
  }
}

let max = 0;

for (let i = 0; i < h; i++) {
  for (let j = 0; j < m; j++) {
    for (let k = 0; k < n; k++) {
      if (graph[i][j][k] === 0) {
        console.log(-1);
        return;
      }
      if (graph[i][j][k] > max) {
        max = graph[i][j][k];
      }
    }
  }
}

console.log(max - 1);
