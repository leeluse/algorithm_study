function solution(answers) {
    var pattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    var score = [0, 0, 0];

    for (const [i, ans] of answers.entries()) {
        for (const [j, pat] of pattern.entries()) {
            if(ans == pat[i % pat.length]) {
                score[j] += 1
            }
        }
    }
    
   const max = Math.max(...score);
    
   var ans = []
    
   for (let i = 0; i < score.length; i++) {
        if(score[i] === max) {
            ans.push(i+1)
        }
    }
    
    return ans
}
