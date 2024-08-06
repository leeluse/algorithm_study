function solution(x) {
    let num = x.toString().split('').map(Number).reduce((a, c) => a+c)
    return x%num === 0
}