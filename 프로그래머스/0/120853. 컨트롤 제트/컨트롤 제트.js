function solution(s) {
    let arr = s.split(' ')
    const min = []
    while(true) {
        let index  = arr.indexOf('Z')
        if(index == -1) {
            if(arr.length == 0) {
                return 0
            } else {
             return arr.map(Number).reduce((acc, cur) => acc+cur)
            }
            return 
            break
        } else {
            min.push(arr[index-1])
            arr.splice(index-1, 2)
        
        }
    }
}