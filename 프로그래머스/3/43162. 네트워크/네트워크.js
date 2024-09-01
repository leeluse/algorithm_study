function solution(n, computers) {
    // DFS
    // 방문 여부를 남기기
    const visited = Array(n).fill(false);
    let count = 0;
    
    // 방문 가능한 곳을 확인하기
    for(let i = 0; i < computers.length; i++) {
        // 방문하지 않은 곳이라면, 방문하러 가기
        if(!visited[i]) {
            dfs(i, visited, computers);
            count ++;
        }
    }
    
   return count
}

function dfs(node, visited, computers) {
    // 방문 표시
    visited[node] = true;
    
    for(let idx = 0; idx < computers[node].length; idx++) {
        // 방문 가능하며, 방문한 적 없을 경우
        if(computers[node][idx] && !visited[idx]) {
            // 방문하러 가기
            dfs(idx, visited, computers);
        }
    }
}