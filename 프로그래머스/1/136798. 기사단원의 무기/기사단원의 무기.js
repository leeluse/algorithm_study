function solution(number, limit, power) {
    var num = 1
    var stk = []
    
    // 약수를 담을 방법
    while(true) {
        var count = 0
        if(num > number) { break }
        else {
            // 약수의 대칭성을 사용해 계산
            for(let i = 1; i <= Math.sqrt(num); i++) {
                if(num % i === 0) {
                    if(num/i === i) {
                        count += 1
                    } else {
                        count += 2
                    }
                } 
            }
            stk.push(count)
            num += 1
        }
    }
    
    return stk.map((v) => limit < v ? power : v).reduce((acc, cur) => acc + cur)
}