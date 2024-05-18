function solution(spell, dic) {
    var str = spell.sort().join('')    
    dic = dic.map((v) => v.split('').sort().join(''))
    return dic.filter((v) => v.match(str)).length ? 1 : 2
                
}