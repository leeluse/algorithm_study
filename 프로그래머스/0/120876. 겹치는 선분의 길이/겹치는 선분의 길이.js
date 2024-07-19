function solution(lines) {
   let lineArr = new Array(200).fill(0);
    var answer = 0;
   
   for(line of lines) {
       for(let i = line[0]; i < line[1]; i++) {
            lineArr[i + 100] += 1
       }
   }
    
    for (let i in lineArr) {
       if(lineArr[i] > 1) {
           answer += 1
       }
    }
    
    return answer
    
}