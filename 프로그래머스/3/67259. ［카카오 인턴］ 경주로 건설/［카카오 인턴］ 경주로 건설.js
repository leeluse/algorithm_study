function solution(board) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    let min = Infinity;
    const N = board.length;
     const costMap = Array.from({length: N},
                           () => Array.from({length: N}, 
                              () => Array(4).fill(Infinity)));
    
    const queue = [[0, 0, 0, -1]];
    

    while(queue.length > 0) {
        const [x, y, cost, dir] = queue.shift();
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            // 범위 확인
            if(nx < 0 || ny < 0 || nx >= N || ny >= N || board[nx][ny] === 1) continue;
            // 같은 방향 또는 처음일 경우 100 아님 600
            const newCost = (dir === -1 || i === dir) ? cost + 100 : cost + 600;
            
            // 만약 지금 위치에 존재하는 비용보다 새로 계산된 비용이 더 낮을 경우 갱신
            if(costMap[nx][ny][i] > newCost) {
                costMap[nx][ny][i] = newCost;
                queue.push([nx, ny, newCost, i]);
            }
            // 현재까지 나온 최소 비용과 지금 도착한 위치의 최소 비용 비교
            if(nx === N-1 && ny === N-1) {
                min = Math.min(min, newCost);
            }
            
        }
    }
    return min
}