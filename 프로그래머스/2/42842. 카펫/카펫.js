function solution(brown, yellow) {
    const num = brown + yellow;
    let arr = [];
    
    for(let i = 1; i <= num; i++) {
        if(num%i == 0 && brown/2 >= i && (i-2)*(num/i-2) == yellow) {
            return [Math.max(i, num/i), Math.min(i, num/i)]
        } 
    }
    
} 