function solution(k, tangerine) {
   const counts = Array(Math.max(...tangerine)).fill(0);
    let result = 0;
    for(const v of tangerine) {
        counts[v-1] ++;
    }
    counts.sort((a, b) => b-a);

    for(let i = 0; i < counts.length; i++) {
        
        if(k <= 0) {
            break;
        }
        result ++;
        k -= counts[i];
    }
    return result
}