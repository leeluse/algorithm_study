function solution(n) {
    var number = []
    for(let i=1; i<=n; i++) {
        n % i == 0 && number.push(i)
    }
    return number
}