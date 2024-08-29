function solution(maps) {
    // 이동하기
    const move = [[-1, 0], [0, -1], [0, 1], [1, 0]];    
    // 맵의 크기
    const n = maps.length;
    const m = maps[0].length;
    // 이동 거리 구하기 위한 맵 생성
    const answer = Array.from({length: n }, () => Array(m).fill(-1));
    
    function bfs(start) {
        const queue = [];
        queue.push(start);
        answer[start[0]][start[1]] = 1;
        
        // 큐가 빌 때까지 반복
        while(queue.length !== 0) {
            const [x, y] = queue.shift()
        
            for(const [moveX, moveY] of move) {
                const dx = x+moveX;
                const dy = y+moveY;
                // 맵 내 범위 유효성 확인
                if(dx < 0 || dx >= n || dy < 0 || dy >= m) {
                    continue;
                }
                // 벽인지 확인
                if(maps[dx][dy] === 0) {
                    continue;
                }
                // 지나간 곳인지 확인
                if(answer[dx][dy] === -1) {
                    // 다음 행선지 설정
                    queue.push([dx, dy])
                    // 지나간 여부 남기기
                    answer[dx][dy] = answer[x][y] + 1;
            }
        }
    }
        return answer
    }
       bfs([0, 0]);
    return answer[n-1][m-1]
}


