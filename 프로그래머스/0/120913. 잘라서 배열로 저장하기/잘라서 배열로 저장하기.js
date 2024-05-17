function solution(my_str, n) {
    var count = 0
    var arr = []
    while(count < my_str.length) {
        arr.push(my_str.slice(count, count + n))
        count += n
    }
    return arr
}