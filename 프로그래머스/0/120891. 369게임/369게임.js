function solution(order) {
    var count = 0
    var threeSixNine = [3, 6, 9]
    var clab = order.toString().split('').map(Number)
    clab.forEach((v) => threeSixNine.includes(v) && count++)

    return count
    
}