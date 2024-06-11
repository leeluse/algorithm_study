function solution(s){
    var count = 0
    var count= 0

    s.split('').forEach((v) => {
       if(v === 'P' || v === 'p') {
           count += 1
       } else if(v === 'Y' || v === 'y') {
           count -= 1
       }
    })
    
    return count === 0 ? true : false
    

}