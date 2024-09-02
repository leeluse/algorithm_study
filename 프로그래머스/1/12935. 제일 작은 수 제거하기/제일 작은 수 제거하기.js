function solution(arr) {
    const min = [...arr].sort((a, b) => a - b)[0]
    arr.splice(arr.indexOf(min), 1)
    if(arr.length == 0) {
        return [-1]
    } else {
     return arr
    }
}