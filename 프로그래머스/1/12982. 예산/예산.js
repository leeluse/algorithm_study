function solution(d, budget) {
    const sortD = d.sort((a, b) => a - b);
    let result = 0;
    
    for(const v of d) {
        if(budget - v < 0) break;
        budget -= v;
        result ++;
    }
    return result;
}