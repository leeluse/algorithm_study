function solution(score) {
    const hash = [];
    const result = [];
  const sum = score.map(([a, b]) => a+b);
  [...sum].sort((a, b) => b - a).map((v, i) => {hash.push(v)})
    
  for(let i = 0; i<sum.length; i++) {
      result.push(hash.indexOf(sum[i]) + 1)
  }

    return result;
  
 
  
}