function solution(n) {
    var count = 0
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
                count += i        
            if(n / i  !== i) {
                count += n / i
            }
        }
    }
    
    return count
}