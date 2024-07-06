function solution(n, arr1, arr2) {
    var stk = []
    for(let i = 0; i < arr1.length; i++) {
        var char = ""
        for (let j = n-1; j>=0; j--) {
            if(2**j > arr1[i] && 2**j > arr2[i]) {
                char += ' '
            } else {
                if(2**j <= arr1[i] && 2**j > arr2[i]) {
                    console.log("1", arr1[i], char)
                    arr1[i] -= 2**j
                    char += '#'
                } else if(2**j <= arr2[i] && 2**j > arr1[i]) {
                    console.log('2', arr2[i], char)
                    arr2[i] -= 2**j
                    char += '#'
                }
                 else {
                    arr1[i] -= 2**j
                    arr2[i] -= 2**j
                    char += '#'
                }
            }
        }
        stk.push(char)
        }
    
    return stk
}