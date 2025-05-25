function solution(n) {
    let sum = 0;
    
    for(let i = 1; i<=n; i++) {
        if(i%2===0 && n%2===0) {
            sum += i**2
        }
        if(i%2!==0 && n%2!==0) {
            sum += i
        }
    }
    return sum
}