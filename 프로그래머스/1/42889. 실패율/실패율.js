function solution(N, stages) {
    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 현재 멈춰있는 스테이지의 번호가 담긴 배열 = stages    
    // 전체 스테이지 개수 = N
    
    const ans = new Array(N).fill(0)
    
    
    for (let i = 0; i < ans.length; i++) {
        var clear = 0
        var fail = 0
        for (let j = 0; j < stages.length; j++) {
            
            if(stages[j] > i+1 || stages[j] == i+1) {
                clear += 1
            }
            if(stages[j] == i+1) {
                fail += 1
            }
        }
        ans[i] += fail / clear
    }
    // ans에서 index를 지정해 주기 위해 Object.entries를 사용한다
        // sort를 사용해 준다 이때, Object의 value를 비교하기 때문에 [1]를 붙여야 한다
    return Object.entries(ans).sort((a, b) => b[1] - a[1]).map((v) => Number(v[0]) + 1)
    
    
}