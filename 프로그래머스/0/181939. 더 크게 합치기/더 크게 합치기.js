function solution(a, b) {
    return b.toString() + a.toString() > a.toString() + b.toString() ?
        Number(b.toString() + a.toString()) :
        Number(a.toString() + b.toString())
   
}