function solution(n) {
    const arr = []
    for(let j = 2; j <= n; j++) {
        let count = 0
          for(let i = 2; i <= j; i++) {
            if(j%i === 0) {
                count ++
            }
        }
         if(count == 1 &&  n % j == 0) {
            ~~(n /= j)
             arr.push(j)
        }
    }
  
    return arr
}
    