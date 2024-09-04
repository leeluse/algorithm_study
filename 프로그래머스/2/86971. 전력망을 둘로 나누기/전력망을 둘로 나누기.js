function solution(n, wires) {
    const graph = Array.from({length: n+1}, () => []);
    const visited = Array(n).fill(false);
    
    // 양방향으로 그래프 생성
    for(const [v, n] of wires) {
        graph[v].push(n);
        graph[n].push(v);
    }
    
    function dfs (node, parent) {
        let cnt = 1;
        for(const child of graph[node]) {
            if(child !== parent) {
                cnt += dfs(child, node);
            }
        }
        return cnt;
    }

    let answer = Infinity;
    
    for (const [a, b] of wires) {
    // 간선 제거
        // 1번과 3번이 끊어짐
        graph[a].splice(graph[a].indexOf(b), 1);
        // 3번과 1빈이 끊어짐
        graph[b].splice(graph[b].indexOf(a), 1);
        
        // 둘이 끊어진 상태에서의 개수 찾기
        const cntA = dfs(a, b);
        const cntB = n - cntA;
        
    // 간선 복원
        graph[a].push(b);
        graph[b].push(a);
        
        answer = Math.min(answer, Math.abs(cntA-cntB));
        
    }
    
    return answer
}