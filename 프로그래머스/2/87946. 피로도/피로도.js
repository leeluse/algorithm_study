function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(0);
    let maxCount = 0;
    
    function dfs(curK, count) {
        maxCount = Math.max(count, maxCount);
        
        for(let i = 0; i < dungeons.length; i++) {
            if(curK >= dungeons[i][0] && visited[i] == 0) {
                visited[i] = 1;
                dfs(curK - dungeons[i][1], count + 1);
                // 다음 for 문에서 백트래킹 가능하게끔 visited[i]를 0으로 돌려놓기
                visited[i] = 0;
            }
        }
        return maxCount;
    }
    
    return dfs(k, 0);
}