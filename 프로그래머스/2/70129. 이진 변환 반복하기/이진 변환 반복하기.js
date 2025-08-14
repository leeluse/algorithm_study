function solution(s) {
    let result = s;
    let count = [0, 0];
    
    while(result.length != 1) {
        const [zero, len] = filterZero(result);
        count = [count[0] + 1, count[1] + zero];
        result = len.toString(2);
    }
    
    return count;
}

function filterZero(s) {
    const filteredSLen = s.split("").filter((v) => v == "1").length;
    const zeroCount = s.length - filteredSLen;
    
    return [zeroCount, filteredSLen];
}

