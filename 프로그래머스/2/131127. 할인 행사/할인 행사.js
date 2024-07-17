function solution(want, number, discount) {
    var answer = {}
    var count = 0
    var able = 0
    
    
    for (let i = 0; i < want.length; i++) {
        answer[want[i]] = number[i]
    }

    while(count <= discount.length-10) {
        var newAnswer = {...answer}
        var sum = 0
        for (let j = count; j < count+10; j++) {
            if(newAnswer[discount[j]]) {
                newAnswer[discount[j]] -= 1
                }
            }
        
        for (const n in newAnswer) {
            sum += newAnswer[n]
        }
        
        if(sum == 0) {
            able += 1
        }
        count += 1
    }
    
    return able
    
}