const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

  const [N, M] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => []);
  const visited = Array(N).fill(0);
  let count = 0;
  
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a - 1].push(b);
    graph[b - 1].push(a);
  }
  
  const stk = [];
  
  for (let i = 0; i < N; i++) {
    if (visited[i] === 0) {
      stk.push(i);
      dfs();
      count++;
    }
  }
  
  function dfs() {
    const node = stk.pop();
    visited[node] = 1;
    for (const next of graph[node]) {
      if (visited[next - 1] === 0) {
        stk.push(next - 1);
        dfs();
      }
    }
  }
  
  console.log(count);
  