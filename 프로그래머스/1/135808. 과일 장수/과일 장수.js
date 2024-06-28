function solution(k, m, score) {
    var sortScore = score.sort((a, b) => a - b).reverse()
    var count = []    
    for(let i = 0; i+m <= score.length; i += m) {
        var basketOf = sortScore.slice(i, i+m)
        count.push(basketOf[m-1] * m)
    }
    
    return count.length > 0 ? count.reduce((acc, cur) => acc + cur) : 0
}