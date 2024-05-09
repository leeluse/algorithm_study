function solution(hp) {
    let attack = [5, 3, 1]
    let count = 0

    for(let i = 0; i < attack.length; i++) {
        count += ~~(hp / attack[i])
        hp = hp % attack[i]
    }
    
    return count;
}