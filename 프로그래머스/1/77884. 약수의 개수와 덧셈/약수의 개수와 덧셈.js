function solution(left, right) {
    var num = 0
    for(let i = left; i <= right; i++) {
        var count = 0
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i%j == 0) {
                    count += 1;
                if(i/j !== j) {
                    count += 1;
                }
            }
        }
        count % 2 == 0 ? num +=i : num -= i
    }
    
    return num
}
