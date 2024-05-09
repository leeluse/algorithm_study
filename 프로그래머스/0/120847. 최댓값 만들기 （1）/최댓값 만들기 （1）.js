function solution(numbers) {
    const arr = numbers.sort((a, b) => a-b)
    return arr[numbers.length-1] * arr[numbers.length-2];
}