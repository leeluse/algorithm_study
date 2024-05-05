function solution(n, k) {
    return n*12000+(n < 10 ? k : Math.ceil(k-(n/10)))*2000
}