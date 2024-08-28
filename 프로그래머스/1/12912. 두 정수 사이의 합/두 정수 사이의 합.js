function solution(a, b) {
    let count = 0;
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    
    
    for (let i = min; i <= max; i++) {
        count += i;
    }
    return count
}