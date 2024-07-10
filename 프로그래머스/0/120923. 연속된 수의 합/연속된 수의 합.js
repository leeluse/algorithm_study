function solution(num, total) {
    var mid = Math.ceil(total/num)
    var stk = []
    var first = Math.floor(num/2)
    
    if(num % 2 !== 0) {
        var last = Math.floor(num/2)
    } else {
        var last = Math.floor(num/2) - 1 
    }
    
    for(let i = mid-first ; i <= mid+last; i++)  {
        stk.push(i)
    }
    
    return stk
}