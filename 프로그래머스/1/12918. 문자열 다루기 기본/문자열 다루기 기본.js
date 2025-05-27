function solution(s) {
    const len = s.split('').length;
    
    return (s.toUpperCase() === s && s.toLowerCase() === s) && (len == 4 || len == 6) ? true : false
} 