function solution(price, money, count) {
    let sum = 0
    
    for(let i = 0; i < count; i++) {
        sum += price * (i+1)
    }
    
    return money-sum > 0 ? 0 : Math.abs(money-sum)
}