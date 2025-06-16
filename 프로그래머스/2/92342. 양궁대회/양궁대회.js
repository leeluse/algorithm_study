function solution(n, info) {
    const rionArr = Array(11).fill(0);
    let result = [];
    let maxDiff = 0;
    

    combination(0, n, info, rionArr);
    
    function combination(idx, n, apeach, rion) {
        if(idx >= 10 || n <= 0) {
            rion[10] = n;
            updateScore(rion);
            return;
        }
        
        if(apeach[idx] + 1 <= n) {
            rion[idx] = apeach[idx] + 1;
            combination(idx+1, n-rion[idx], apeach, rion);
            rion[idx] = 0;
            
        } 
        combination(idx+1, n, apeach, rion);
    }

    function updateScore(rion) {
        let rionScore = 0;
        let apeachScore = 0;
        
      for (let i = 0; i < 11; i++) {
        if (rion[i] > info[i]) {
          rionScore += (10 - i);
        } else if (info[i] > 0) {
          apeachScore += (10 - i);
        }
      }
      const diff = rionScore - apeachScore;
      if (diff > 0 && diff > maxDiff) {
            maxDiff = diff;
            result = [...rion];
          
          
      } else if(diff == maxDiff) {
            for(let i = 10; i >= 0; i--) {
                if(result[i] < rion[i]) {
                    result = [...rion];
                    break;
                } else if(result[i] > rion[i]) {
                    break;
                }
            }
      }
    }
    
    return result.length > 0 ? result : [-1];
}

