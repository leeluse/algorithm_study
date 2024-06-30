function solution(cards1, cards2, goal) {
    var stk = []

    goal.reverse().forEach((v) => {
        if(cards1.includes(v) || cards2.includes(v)) {
            if(cards1[cards1.length -1] == v) {
                stk.push(v)
                cards1.pop()
            } else {
                stk.push(v)
                cards2.pop()   
            }} 
         else {
          return
        }
    })
    
    console.log(stk.length)
    console.log(goal.length)
   return stk.length < goal.length ? 'No' : "Yes"
}