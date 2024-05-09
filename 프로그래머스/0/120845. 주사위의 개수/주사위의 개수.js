function solution(box, n) {
    const arr = box.map((v) => ~~(v/n)).reduce((acc, cur) => acc * cur)
    return arr
}