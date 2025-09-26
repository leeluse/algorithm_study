function solution(n, m, section) {
    let idx = 1;
    let curIdx = 0;
    let count = 1;
    
    while(idx < section.length) {
        const painting = section[idx] - section[curIdx];
        if(painting >= m) {
            count++;
            curIdx = idx
            idx ++;
        } else {
            idx++;
        }
    }
    
   return count;
    
}