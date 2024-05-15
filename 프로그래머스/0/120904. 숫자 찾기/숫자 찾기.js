function solution(num, k) {
    const arr = num.toString().split('').map(Number).indexOf(k)
    
    return arr == -1 ? arr : arr+1
    }