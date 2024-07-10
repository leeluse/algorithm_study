function solution(n) {
    var count = 0
    var char = []
    
    while(n > 0) {
            char.push(n%3)
            n = Math.floor(n/3)
    }
    
    char = char.reverse()

    for (let i = 0; i < char.length; i++) {
        count += 3**i * char[i]
     
    }
    
    return count
}