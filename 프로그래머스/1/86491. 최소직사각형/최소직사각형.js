function solution(sizes) {
    let minL = 0;
    let maxR = 0;
    for(const s of sizes) {
        s.sort((a, b) => a - b);
        if(minL < s[0]) {
            minL = s[0];
        }
        if(maxR < s[1]) {
            maxR = s[1];
        }
    }
    return minL * maxR
}