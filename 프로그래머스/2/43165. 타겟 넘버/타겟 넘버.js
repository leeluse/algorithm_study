function solution(numbers, target) {
    let answer = 0;
    
    dfs(0, 0);
    
    function dfs(idx, count) {
        if(idx === numbers.length) {
            if(count === target) {
                answer ++;
            }
            return;
        }
        const node = numbers[idx];
        dfs(idx+1, count + node);
        dfs(idx+1, count - node);
    }
    
   return answer
}

