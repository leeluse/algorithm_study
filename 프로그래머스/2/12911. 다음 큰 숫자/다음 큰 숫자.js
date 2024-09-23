function solution(n) {
    const arr = n.toString(2).split('').filter((v) => v=='1');
    while(true) {
        n++;
        if(arr.length == n.toString(2).split('').filter((v) => v=='1').length) {
            return n;
        }
    }
}