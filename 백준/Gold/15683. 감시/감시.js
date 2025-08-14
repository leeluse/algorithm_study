const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
const box = [];
let wall_count = 0;
const queue = [];
let max = 0;

const cctvPatterns = {
  1: [[0], [1], [2], [3]],
  2: [
    [0, 2],
    [1, 3],
  ],
  3: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  4: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  5: [[0, 1, 2, 3]],
};

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  box.push(arr);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] != 0) {
      if (box[i][j] != 6) {
        queue.push([i, j]);
      }
    } else {
      wall_count += 1;
    }
  }
}

function back(count, idx, box) {
  if (idx == -1) {
    max = Math.max(max, count);
    return;
  }

  const [x, y] = queue[idx];

  const move = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];
  const type = box[x][y];
  const patterns = cctvPatterns[type];

  for (let i = 0; i < patterns.length; i++) {
    let arr = [];

    for (let pattern of patterns[i]) {
      let [nx, ny] = [move[pattern][0] + x, move[pattern][1] + y];
      while (nx >= 0 && nx < n && ny >= 0 && ny < m && box[nx][ny] !== 6) {
        if (box[nx][ny] == 0) {
          arr.push([nx, ny]);
          box[nx][ny] = 1;
        }
        
        nx += move[pattern][0];
        ny += move[pattern][1];
      }
    }

    back(count + arr.length, idx - 1, box, count);

    for (let [nx, ny] of arr) {
      box[nx][ny] = 0;
    }
  }
}

if (queue.length !== 0) {
  back(0, queue.length - 1, box);
}
console.log(wall_count - max);
