function solution(array, commands) {
 const result = [];
 for(const c of commands) {
    const [n, m, k] = c;
    result.push([...array].slice(n-1, m).sort((a, b) => a - b)[k-1]);
 }
 return result;
}
