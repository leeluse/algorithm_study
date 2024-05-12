function solution(s) {
    var str = []
    s.split('').forEach((v) => {
        if(s.split('').filter(e => e == v).length === 1) {
            str.push(v)
        }
    })
    return str.sort().join('')
}