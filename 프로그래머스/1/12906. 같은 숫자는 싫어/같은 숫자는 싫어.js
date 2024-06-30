function solution(arr)
{
    var stk = []
    arr.forEach((v) => {
        if(stk.length === 0 || stk[stk.length -1] !== v) {
            stk.push(v)
        }
    })
    return stk
}