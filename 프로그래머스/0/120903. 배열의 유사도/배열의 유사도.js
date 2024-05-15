function solution(s1, s2) {
    var count = 0
    s1.forEach((v) => {
        s2.map((t) => v == t && count ++)
    })
    
    return count
}