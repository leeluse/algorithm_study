function solution(my_string) {
    var str = []
    my_string.split('').map((v) => v >= 'a' & v <= 'z' ?
                            str.push(v.toUpperCase()) : str.push(v.toLowerCase()))
    
    return str.join('')
    
}