function solution(arr, divisor) {
    const length = arr.length

    for(let i = 0; i<length; i++) {
        const top = arr.pop();
        if(top%divisor === 0) {
            arr.unshift(top)
        }
    }
    return arr.length === 0 ? [-1] : arr.sort((a, b) => a -b)
}