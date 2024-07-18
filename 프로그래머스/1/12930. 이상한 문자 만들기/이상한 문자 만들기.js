function solution(s) {
    const arr = [...s.toUpperCase().split(' ')]

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').map((v, i) => (i+1) % 2 == 0 ? v.toLowerCase() : v).join('')
    }

    return arr.join(' ')
}