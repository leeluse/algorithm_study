function solution(n, words) {
    const used = new Set()
    let prev = words[0][0]
    
    for (let i = 0; i < words.length; i++) {
        word = words[i]
        // 앞 글자랑 같지 않고 used에 겹치지 않나?
        if(word[0] !== prev || used.has(word)) {
            return [i%n+1, Math.ceil((i+1)/n)]
        }
        
        used.add(word)
        prev = word[word.length-1]
    }
    
    return [0, 0]
    
}