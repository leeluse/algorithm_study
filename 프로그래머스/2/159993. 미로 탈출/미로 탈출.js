class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  
  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== 'X';
}

function appendToQueue(ny, nx, k, time, visited, q) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  // n*m으로 초기화한 뒤, m의 내부에 [false, false]로 초기화한다.
  const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));

  // 2차원 배열을 위, 아래로 움직인다
  const dy = [-1, 1, 0, 0];
  // 2차원 배열을 왼쪽, 오른쪽으로 움직인다
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  // 끝 부분을 -1로 초기화한다.
  let endY = -1;
  let endX = -1;

  // 시작점과 끝점을 찾기 위한 로직
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') {
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true; // i의 j의 0번째 인덱스의 상태는 초기에 false로 설정이 되어있다.
        // 만약 시작점일 경우 여기를 true로 설정해 준다
        // visited 배열:
        //   [  [ [true, false], [false, false], [false, false], [false, false] ],
        //     [ [false, false], [false, false], [false, false], [false, false] ],
        //     [ [false, false], [false, false], [false, false], [false, false] ]
        //   ]
      }
      // maps에서 끝점인 E를 찾을 경우, 그 곳의 위치를 endY, endX에 담아 준다
      if (maps[i][j] === 'E') {
        endY = i;
        endX = j;
      }
    }
  }
  // q가 비어있을 때까지
  while (!q.isEmpty()) {
    // 맨 앞에 있는 q를 pop한 후  [y, x, k, time]에 담아 준다
    // 최초 큐의 상태
    // items: [ [ 0, 0, 0, 0 ] ], front: 0, rear: 1
    const [y, x, k, time] = q.pop();

    // 만약 현재 위치가 도착지점이면? time, 즉 이동 횟수를 리턴한다
    if (y === endY && x === endX && k === 1) {
      return time;
    }

    // 상하좌우 이동을 위한 for문
    for (let i = 0; i < 4; i++) {
      // ny = 0 + -1 
      // nx = 0 + 0 
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      if (maps[ny][nx] === 'L') {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }

  return -1;
}


