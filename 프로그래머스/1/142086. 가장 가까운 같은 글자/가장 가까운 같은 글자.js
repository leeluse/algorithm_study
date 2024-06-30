function solution(s) {
    var stk = []
    var countStk = []
    for(let i =0; i < s.length; i++) {
        if(!stk.includes(s[i])) {
            countStk.push(-1)
            stk.push(s[i])
        } else {
            countStk.push(stk.length - stk.lastIndexOf(s[i]))
            stk.push(s[i])
        }
       
    }
    return countStk
}