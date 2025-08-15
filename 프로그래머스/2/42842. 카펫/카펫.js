function solution(brown, yellow) {
    let num = brown + yellow;
    let max = 1;
    let result = [];
    
    for(let i = 3; i <= Math.sqrt(num); i++) {
        if(Math.ceil(num/i) * i == num && (i-2) * (Math.ceil(num/i)-2) == yellow) {
            result = [Math.ceil(num/i), i];
            }
        }
    return result
} 

