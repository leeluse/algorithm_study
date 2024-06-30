function solution(ingredient) {
    var count  = 0
    var stk = []
    
    for(let i = 0; i < ingredient.length; i++) {
        stk.push(ingredient[i]);
        
        if(stk.length >= 4 && stk.slice(-4).join('') === '1231') {
            stk.splice(-4, 4);
            count += 1
            
        }
    }
    
    return count
}