function solution(s) {
    const arr = s.split("");
    let countArr = [0, 0];
    let init = arr[0];
    let count = 1;
    
    for(let i = 0; i < arr.length; i++) {
        if(countArr[0] !== 0 && countArr[0] == countArr[1]) {
            count++;
            init = arr[i];
        }
        init == arr[i] ? countArr[0] += 1 : countArr[1] += 1;
    }
    return count
}
