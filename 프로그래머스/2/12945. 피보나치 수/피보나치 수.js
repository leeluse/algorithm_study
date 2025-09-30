function solution(n) {
    const arr = Array(n + 1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
    }
    
    return arr[n]
}
