const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

  const [M, N, K] = input[0].split(" ").map(Number);
  const arr = Array.from({ length: M }, () => Array(N).fill(0));
  const result = [];
  
  for (let i = 1; i <= K; i++) {
    const [lx, ly, rx, ry] = input[i].split(" ").map(Number);
    for (let i = ly; i < ry; i++) {
      for (let j = lx; j < rx; j++) {
        if (arr[i][j] !== 1) {
          arr[i][j] = 1;
        }
      }
    }
  }
  
  const queue = [];
  
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 0) {
        queue.push([i, j]);
        arr[i][j] = 1;
        const cnt = bfs();
        result.push(cnt);
      }
    }
  }
  
  function bfs() {
    let count = 0;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
  
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      count++;
  
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
  
        if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
        if (arr[nx][ny] === 0) {
          queue.push([nx, ny]);
          arr[nx][ny] = 1;
        }
      }
    }
    return count;
  }
  
  console.log(result.length);
  console.log(result.sort((a, b) => a - b).join(" "));
  