function solution(n) {
    const count =  []
    for(let i = 1; i <= n; i++) {
        let temp = 0
        for(let j = 1; j <= i; j++) {
            if(i%j == 0) {
                  temp += 1  
            }
        }
        if(temp >= 3) {
            count.push(i)
        }
    }
    return count.length
}
