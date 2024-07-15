function solution(s) {
    var count = 0
    const n = s.length
    
    for(let i = 0; i < s.length; i++) {
        const stk = []
        let check = true;

        for (let j = 0; j < s.length; j++) {
            const c = s[(i + j) % s.length]
            
            if (c == '{' || c == '[' || c == '(') {
                stk.push(c)
            } else {
                if(stk.length === 0) {
                    check = false;
                    break;
                }
                
                const top = stk[stk.length -1]
                
                if (c === "}" && top === "{") {
                    stk.pop()    
                } else if (c === ")" && top === "(") {
                    stk.pop()    
                } else if (c === "]" && top === "[") {
                    stk.pop()    
                } else {
                    check = false;
                    break;
                }
            }
         
        }
        
         if (check && stk.length === 0) {
            count++;
        }
    }
    return count
}    
    
    
