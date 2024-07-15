function solution(s) {
    const stk = []
    
    for (let c of s) {
        if(s.length === 0) {
            stk.push(c)
        } else{
            if(stk[stk.length -1] == c) {
                stk.pop()
            } else {
                stk.push(c)
            } 
        }      
    }
     
    return stk.length === 0 ? 1 : 0
    
}
