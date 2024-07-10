function solution(numbers) {
    var res = []
    for(let i = 0; i <= numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(!res.includes(numbers[i] + numbers[j])) {
                res.push(numbers[i] + numbers[j])
            }
        }
    }
    return res.sort((a, b) => a - b)
}