function solution(name, yearning, photo) {
    const point = {}
    for (let i = 0; i < name.length; i++) {
        point[name[i]] = yearning[i]
    }
    var answer = []
    
    photo.forEach((v) => {
        var count = 0
        v.forEach((k) => {
            if(point[k]) {
                count += point[k]
            } else {
                count += 0
            }
        })
        answer.push(count)
    })
    return answer
}