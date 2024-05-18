function solution(sides) {
   var arr  = []
   sides = sides.sort((a,b) => a - b);
    
   for(let i = 1; i < sides[1]+sides[0]; i++) {
       if((i + sides[0]) > sides[1]) {
                arr.push(i)
       }}
    return arr.length
}