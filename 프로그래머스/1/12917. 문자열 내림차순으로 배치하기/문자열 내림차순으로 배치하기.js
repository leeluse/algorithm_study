function solution(s) {
    var char = ''
    var ascii = []
    s.split('').forEach((v) => {
        ascii.push(v.charCodeAt(0))
        ascii.sort((a, b) => b- a)
    })
    
    return ascii.map((v) => String.fromCharCode(v)).join('')
}