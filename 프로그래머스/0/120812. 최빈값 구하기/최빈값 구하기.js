function solution(array) {
    const countArr = array.reduce((acc, e) => {
        if (e in acc) {
            acc[e] ++;
        } else {
            acc[e] = 1
        }
        return acc
    }, {});

    const maxCount = Math.max(...Object.values(countArr))

    
const dist = Object.values(countArr).filter((x) => x == maxCount)

if(dist.length >= 2) {
    return -1;
} else {
    let maxKey;
    for (let key in countArr) {
        if (countArr[key] === maxCount) {
            maxKey = key;
        }
     }
    return parseInt(maxKey)
    }
}