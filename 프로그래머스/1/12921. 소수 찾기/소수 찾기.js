function solution(n) {
    const arr = Array(n+1).fill(true);
    arr[1] = arr[0] = false;
    
    for(let i = 2; i * i <= n; i++) {
        if(arr[i]) {
           for(let j = i * i; j <= n; j+=i) {
               arr[j] = false;
            }
        }
 
    }
    return arr.filter(a => a).length
    
}