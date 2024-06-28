function solution(t, p) {
    var temp = t.split('')
    var count = 0
    for(let i = 0; i <= t.length - p.length; i++) {
         var char = temp.slice(i, i+p.length).join('')

         if(Number(char) <= p) {
             count += 1
         }
    }
    
    return count 
}