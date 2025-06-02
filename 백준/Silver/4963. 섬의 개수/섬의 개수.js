const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

  for (let i = 0; i < input.length -1; i++) {
    let idx = i + 1;
    const [w, h] = input[i].split(" ").map(Number);
    const graph = [];
    const visited = Array.from({ length: h }, () => Array(w).fill(0));
    for (let j = idx; j < idx + h; j++) {
      graph.push(input[j].split(" ").map(Number));
    }
    i += h;
    doCase(w, h, graph, visited);
  }
  
  function doCase(w, h, graph, visited) {
    let count = 0;
  
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (graph[i][j] === 1 && visited[i][j] === 0) {
          dfs(i, j, graph, visited);
          count++;
        }
      }
    }
    console.log(count);
  }
  
  function dfs(x, y, graph, visited) {
    const dx = [0, 0, -1, 1, -1, 1, -1, 1];
    const dy = [-1, 1, 0, 0, -1, 1, 1, -1];
    visited[x][y] = 1;
  
    for (let i = 0; i < 8; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
  
      if (nx < 0 || nx >= graph.length || ny < 0 || ny >= graph[0].length)
        continue;
      if (graph[nx][ny] === 1 && visited[nx][ny] === 0) {
        dfs(nx, ny, graph, visited);
      }
    }
  }
  