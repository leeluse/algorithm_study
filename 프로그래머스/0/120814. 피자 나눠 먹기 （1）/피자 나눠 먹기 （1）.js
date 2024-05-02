function solution(n) {
    let count = 1
    let pizza = 7
    let less = pizza*count - n
    
     while(less < 0) {
        count ++;
         less = pizza*count - n
        }
   
    return count;
}