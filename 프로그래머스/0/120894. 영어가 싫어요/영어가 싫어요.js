function solution(numbers) {
    var number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    number.forEach((v) => {
        if(numbers.indexOf(v) != -1) {
             numbers = numbers.replaceAll(v, number.indexOf(v))
        }})
    
    return parseInt(numbers)
}