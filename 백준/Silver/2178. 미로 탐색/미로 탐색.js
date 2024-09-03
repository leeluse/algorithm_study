let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input.splice(0, 1).pop().split(' ').map(Number);
const arr = input.map((v) => v.split(''));

// 방문 여부를 저장할 visited
const visited = Array.from(Array(n), () => Array(m).fill(0));
visited[0][0] = 1;
// 큐를 초기화
const queue = [[0, 0]];
let count  = 0;

// 움직이기 위한 배열
const dx = [ -1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 큐가 빌 때까지 시작
while(queue.length !== 0) {
    const [x, y] = queue.shift();
    // 상하좌우 둘러보기
    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        // 맵을 벗어나는지 확인
        if(nx >= 0 && nx < n && ny >= 0 && ny < m) {
            // 방문했는지 확인 & 지나갈 수 있는 곳인지 확인
            if(visited[nx][ny] === 0 && arr[nx][ny] === '1') {
               // 가능하다면 방문 여부 표시와 횟수 추가
                queue.push([nx, ny]);
                visited[nx][ny] = visited[x][y]+1;
            }
        }
    }
}

console.log(visited[n-1][m-1]);
