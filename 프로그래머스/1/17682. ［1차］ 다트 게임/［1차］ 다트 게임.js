function solution(dartResult) {
    const pattern = /(\d+[SDT]?(?:\*|)?(?:\#|))/g
    const dartArr = dartResult.split(pattern).filter((v) => v!=='')
    let sum = []
    
    for (let i = 0; i < dartArr.length; i++) {
        const first = dartArr[i].split(/[^\d]+/).filter(Boolean);
        const sec = dartArr[i].split('').filter((v) => v =='S' || v =='D'|| v =='T');
        const opt = dartArr[i].split('').filter((v) => v == '#' || v == '*');
        
        // SDT의 곱 구하기
        const comb = 
                sec == 'S' ? 1 :
                sec == 'D' ? 2 : 3
        // [옵션] 곱 구하기
        if(opt.length != 0) {
            if(opt == '#') {
                sum[i] = first**comb*-1
            } else {
                sum[i] = first**comb*2
                if(i-1 >= 0) {
                    sum[i-1] *= 2
                }
            }
        } else {
            sum[i] = first ** comb
        }
    }
   
    return sum.reduce((acc, cur) => acc + cur)
    
}