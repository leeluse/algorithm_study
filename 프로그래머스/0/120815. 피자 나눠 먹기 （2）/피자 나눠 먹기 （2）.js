function solution(n) {
    pizza = 6

    for(let i = 1; i <= n*pizza; i++){
        if(i%pizza==0 && i%n==0) {
            let count = i
            return count / 6
            
            }    
        }
}
