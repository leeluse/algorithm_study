function solution(array, commands) {
    const answer = []
    for (const [i, j, k] of commands) {
        let sliceArr = array.slice(i-1, j);
        answer.push(sliceArr.sort((a, b) => a - b)[k-1])
    }
    
    return answer
}
