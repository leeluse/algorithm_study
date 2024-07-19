function solution(id_list, report, k) {
    const reportObj = {}
    const countObj = {}
    
    for (let id of id_list) {
       if(!reportObj[id]) {
            reportObj[id] = []
            countObj[id] = 0
        } 
    }
    
    for (let re of report) {
        const [from, to] = re.split(' ')
        if(!reportObj[from].includes(to)) {
            reportObj[from].push(to)
        }
    }
    
    for (let obj in reportObj) {
        for(let o of reportObj[obj]) {
            countObj[o] += 1
        }
    }
    
    const count = Object.keys(countObj).filter((v) => countObj[v] >= k)
    const answer = new Array(id_list.length).fill(0)
    
    for(let i = 0; i < id_list.length; i++) {
        for (let c of count) {
            if(reportObj[id_list[i]].includes(c)) {
                answer[i] += 1                
            }
        }
    }
  
    
    return answer

  

}