function solution(N, load, K) {
    const graph = Array.from({length: N+1}, () => [])
    const distac = Array(N+1).fill(Infinity)
        distac[1] = 0
    for(const [a, b, cost] of load) {
        graph[a].push([b, cost])
        graph[b].push([a, cost])
    }
    
    const queue = [1]
    
    while(queue.length > 0) {
        const node = queue.shift();
        for(const [nextNode, nextDist] of graph[node]) {
            if(distac[nextNode] > distac[node] + nextDist) {
                distac[nextNode] = distac[node] + nextDist
                queue.push(nextNode)
            }
        }
    }
    
    return distac.filter((v) => v <= K).length
}