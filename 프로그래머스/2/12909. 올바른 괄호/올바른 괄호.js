function solution(s){
    const stk = []
    
    for (v of s) {
        let top = stk.length

        if(v == "(" || top == 0) {
            stk.push("(")
        } else if (v == ")") {
            if(stk[top-1] == "(") {
                stk.pop()
            }
        }
    }
    
    return stk.length == 0 ? true : false
}