function solution(s, n) {
    let char = ''
    for (a of s.split('')) {
        let change = a.charCodeAt() + n
        if(a !== ' ') {
            if(a.toUpperCase() == a && change > 90 || a.toLowerCase() === a && change > 122) {
                change -= 26
            }
            char += String.fromCharCode(change)
        } else {
            char += ' '
        }
    }
    
    return char
}