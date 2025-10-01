function solution(lottos, win_nums) {
    const result = [6, 6, 5, 4, 3, 2, 1];
    let arr = [0, 6];
    for(let num of lottos) {
        if(win_nums.includes(num)) {
            arr[0] += 1;
        } else if(num !== 0) {
            arr[1] -= 1;
        }
    }
    const [worst, best] = arr;
    return [result[best], result[worst]];
}

