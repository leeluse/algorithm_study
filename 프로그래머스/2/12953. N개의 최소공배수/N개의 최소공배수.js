function PrimeFact(num) {
    const arr = {};
    let i = 2;
    while(num !== 1) {
        if(num%i == 0) {
            num /= i;
            arr[i] = (arr[i] || 0) + 1;
        } else {
            i+=1;
        }
    }
    return arr;
}

function solution(arr) {
    const maxCount = {};
    let result = 1;
    
    for(let num of arr) {
        const primes = PrimeFact(num);
        for(let key of Object.keys(primes)) {
           maxCount[key] = Math.max(maxCount[key] || 0, primes[key]);
        }
    }
    
    for(let key of Object.keys(maxCount)) {
        result *= key ** maxCount[key]
    }

    return result
}