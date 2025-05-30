const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 1;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

while (idx < input.length) {
  let count = 0;
  const queue = [];

  const [x, y, z] = input[idx++].split(" ").map(Number);
  const arr = Array.from({ length: x }, () => Array(y).fill(0));
  const visited = Array.from({ length: x }, () => Array(y).fill(0));

  let start = idx;
  for (let i = start; i < start + z; i++) {
    const [n, m] = input[i].split(" ").map(Number);
    arr[n][m] = arr[n][m] + 1;
    idx++;
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (arr[i][j] === 1 && visited[i][j] === 0) {
        count++;
        visited[i][j] = 1;
        queue.push([i, j]);

        bfs(arr, x, y, visited, queue);
      }
    }
  }
  console.log(count);
}

function bfs(arr, x, y, visited, queue) {
  let idx = 0;
  while (queue.length > idx) {
    const [curX, curY] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];
      if (nx < 0 || nx >= x || ny < 0 || ny >= y) continue;
      if (arr[nx][ny] === 1 && visited[nx][ny] === 0) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}
