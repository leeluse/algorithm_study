function factorial(n) {
    let sum = 1
    for(let i = 1; i <= n; i++) {
        sum *= i
    }
    return sum;
}


function solution(balls, share) {
    return Math.round(factorial(balls)
                     /factorial(share)
                     /factorial(balls - share));
}