function solution(a, b) {
    let charToNumber = Number(a.toString() + b.toString())
    return charToNumber > 2*a*b ? charToNumber : 2*a*b
}