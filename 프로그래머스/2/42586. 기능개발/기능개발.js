function solution(progresses, speeds) {
   const ans = []
   const n = progresses.length
   
   let daysLeft = progresses.map((pro, i) => Math.ceil((100-pro )/ speeds[i]))
   let maxDay = daysLeft[0] // 가장 늦게 배포될 작업일
   console.log(daysLeft)
   console.log(maxDay)
   let count = 0
   
   for (let i = 0; i < n; i++) {
       if (daysLeft[i] <= maxDay) {
           console.log(daysLeft[i], maxDay)
           count += 1;
       } else {
           
           ans.push(count)
           count = 1;
           maxDay = daysLeft[i]
       }
   }
   
    ans.push(count);
    return ans
}