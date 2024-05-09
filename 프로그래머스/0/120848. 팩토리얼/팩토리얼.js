function factorial(n) {
    return (n != 1) ?  n * factorial(n-1) :  1;
}


function solution(n) {
    const arr = []
    for(let i = 1; i <= 10; i++) {
        if(factorial(i) <= n) {
            arr.push(factorial(i))
        }
    }
    
    return arr.length
}