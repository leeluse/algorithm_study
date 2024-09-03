let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M, V] = input.splice(0, 1).pop().split(' ').map(Number);
const arr = input.map((v) => v.split(' '));


// BFS & DFS를 위한 연결 그래프 생성하기
const obj = {}
arr.forEach(([v, n]) => {
    if(!obj[v]) {
        obj[v] = [];
    }
    if(!obj[n]) {
        obj[n] = [];
    }
    obj[v].push(n);
    obj[n].push(v);
})

Object.keys(obj).forEach((key) => {
    obj[key].sort((a, b) => a - b);
});



function bfs(obj, V) {
    // 방문 여부 확인 리스트 생성
    const visited = Array(N+1).fill(false);
    visited[0] = true;
    // 리턴할 배열 생성
    const answer = [];
    // 큐에 정점을 넣으며 시작, 방문 여부를 바꿔 주고 방문 시 answer 추가
    const queue = [V];
    visited[V] = true;
    answer.push(V);
    // 큐가 빌 때까지 반복
    while(queue.length !== 0) {
        const node = queue.shift();
        for(const next of obj[node] || []) {
            if(!visited[next]) {
                queue.push(next);
                visited[next] = true;
                answer.push(Number(next));
            }
        }
    }
    return answer.join(' ');
}

function dfs(obj, V) {
    // 방문 여부 확인할 리스트 생성
    const visited = Array(N+1).fill(false);
    visited[0] = true;
    // 리턴할 배열
    const answer = [];
    dfsFunc(V, visited, obj, answer);

    function dfsFunc (node, visited, obj, answer) {
        visited[node] = true;
        answer.push(Number(node));
        for(const next of obj[node] || []) {
            if(!visited[next]) {
                dfsFunc(next, visited, obj, answer);
            }
        }
    }
    return answer.join(' ');
}

console.log(dfs(obj, V));
console.log(bfs(obj, V));