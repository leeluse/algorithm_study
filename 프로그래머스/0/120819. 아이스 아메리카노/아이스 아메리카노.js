const wallet = []


function solution(money) {
    wallet[0] = ~~(money / 5500)
    wallet[1] = (money % 5500)
    return wallet;
}