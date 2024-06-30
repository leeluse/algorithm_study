function solution(k, score) {
    var stk = []
    var sort = []
    
    for(let i = 0; i < score.length; i++) {
        stk.push(score[i])
        stk.sort((a, b) => b-a)                    
        
        
        if(stk.length > k) {
            stk.pop()
        }
        
        sort.push(stk[stk.length -1])
        
        
    }
    
    return sort
}