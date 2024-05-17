function solution(numbers) {
    let max = numbers[0] * numbers[1]
    
    numbers.forEach((v, indexV) => {
        numbers.forEach((k, indexK) => {
            if(indexV != indexK) {
                if(max<v*k) {
                    max = v*k
                }
            }
        })
    })
    
    return max
} 