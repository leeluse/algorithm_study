function solution(slice, n) {
    let count = 1
    while(true) {
        if(slice*count/n < 1) {
            count = count + 1;
        } else {
            break;
        }
    }        
    return count;
}