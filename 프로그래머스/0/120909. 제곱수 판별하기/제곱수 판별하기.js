function solution(n) {
    return Math.sqrt(n) % ~~Math.sqrt(n) === 0 ? 1 : 2 
}