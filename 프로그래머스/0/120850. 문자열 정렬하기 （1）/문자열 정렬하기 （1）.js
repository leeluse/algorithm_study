function solution(my_string) {
    let arr =  my_string.replace(/[^0-9]/g, '')
    return arr.split('').map(Number).sort((a, b) => a-b)
}