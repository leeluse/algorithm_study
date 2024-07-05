function solution(babbling) {
return ['aya','ye','woo','ma']
    .reduce((a,c)=>
            a.map(e=>e.replaceAll(c,' ')), babbling)
    .map(e=>e.split(' ').join('')).filter(e=>!e).length;
    
}