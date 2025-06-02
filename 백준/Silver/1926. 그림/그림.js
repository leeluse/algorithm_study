

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


const [n, m] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const visited = Array.from({ length: n }, () => Array(m).fill(0));
const queue = [];
let max = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 1 && visited[i][j] === 0) {
      max = bfs([i, j], max);
      sum++;
    }
  }
}

console.log(sum);
console.log(max);

function bfs([i, j], max) {
  let count = 0;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  queue.push([i, j]);

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    visited[x][y] = 1;
    count++;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (arr[nx][ny] === 1 && visited[nx][ny] === 0) {
        queue.push([nx, ny]);
        visited[nx][ny] = 1;
      }
    }
  }
  return max < count ? count : max;
}
