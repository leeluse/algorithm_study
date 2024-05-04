function solution(my_string, n) {
    let arr = my_string.split('')
    const repaetArr = arr.map(e => e.repeat(n)).join('')
    return repaetArr;
}