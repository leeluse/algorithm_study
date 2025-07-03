function solution(s) {
    let idx = 0;
    const arr = s.slice(2, -2).split("},{").sort((a, b) => {
        return a.length > b.length ? 1 : -1
    })
    const result = []
    
    for(const a of arr) {
        if(a.length > 1) {
            a.split(',').map((v) => {
                !result.includes(Number(v)) && result.push(Number(v))
            })
        } else {
            result.push(Number(a));
        }
    }
    return result;
}