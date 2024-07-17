function solution(participant, completion) {
    const person = {}
    
    for (let p of participant) {
        if(!person[p]) {
            person[p] = 1
        } else {
            person[p] += 1
        }
    }

    for (let c of completion) {
        person[c] -= 1
    }
    
    
    for (const key in person) {
            if(person[key] !== 0) {
               return key
            }
    }
} 