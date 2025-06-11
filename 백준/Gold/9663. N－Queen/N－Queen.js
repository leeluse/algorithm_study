const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

let cnt = 0;
const col = Array(N).fill(false); 
const diag1 = Array(2 * N).fill(false);
const diag2 = Array(2 * N).fill(false);

back(0);

function back(row) {
  if (row == N) {
    cnt++;
    return;
  } else {
    for (let i = 0; i < N; i++) {
      if (col[i] || diag1[i + row] || diag2[row - i + N]) continue;
      col[i] = diag1[row + i] = diag2[row - i + N] = true;
      back(row + 1);
      col[i] = diag1[row + i] = diag2[row - i + N] = false;
    }
  }
}
console.log(cnt);
