function solution(a, b, n) {
    let count = n
    let answer = 0
    
    while(Math.floor(count/a) > 0) {
       answer += Math.floor(count/a)*b
       count = count - Math.floor(count/a)*a + Math.floor(count/a)*b
    }
    
    return answer
}