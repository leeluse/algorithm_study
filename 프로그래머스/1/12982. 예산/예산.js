function solution(d, budget) {
    let count = 0
    let answer = 0
    
    d.sort((a, b) => a - b).forEach((v) => {
        count += v
        if(count > budget) {
            return answer
        }
        answer += 1
    })
    
    return answer
}