function solution(record) {
    var answer = []
    var person = {}
    var log = {}
    
    for (let rec of record) {
        const status = rec.split(' ')[0]        
        const uid = rec.split(' ')[1]        
        const name = rec.split(' ')[2]     
            
        if(status == 'Enter' | status == 'Change') {
            person[uid] = name
        }
        log[status] == uid
        
    }
    
      for (let rec of record) {
        const status = rec.split(' ')[0]        
        const uid = rec.split(' ')[1]     
            
        status == 'Enter' ? answer.push(person[uid]+ "님이 들어왔습니다.") :
        status == 'Leave' && answer.push(person[uid]+ "님이 나갔습니다.") 
    }


    return answer
}

    