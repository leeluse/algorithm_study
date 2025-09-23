function solution(n) {
    let cnt = 0;
   while(n != 0) {
       if(n%2 !== 0) {
           cnt += 1;
           n-= 1;
       } else {
           n = n/2;
       }
   }
    return cnt
}