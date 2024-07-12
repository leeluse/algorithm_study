function solution(str1, str2) {
    var char = ''
    
    for(let i = 0; i < str1.split('').length; i++) {
        var c = str1.split('')[i] + str2.split('')[i]
        char += c
    }
   return char
}