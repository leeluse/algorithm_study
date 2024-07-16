function solution(board, moves) {
    const stk = []
    let count = 0
    const lanes = [...Array(board[0].length)].map(() => [])
    
    
    for (let i = 0; i < board.length; i++) {
        for (let j = board.length -1 ; j >= 0; j--) {
            if(board[j][i] !== 0) {
              lanes[i].push(board[j][i])
            }
        }
    }
    
    for (const m of moves) {
        if(lanes[m-1].length > 0) {
         const p = lanes[m-1].pop()
         
             if(stk.length > 0 && stk[stk.length - 1] === p) {
                    stk.pop();
                    count += 2;
                } else {
                    stk.push(p)
            }
        }
    }
    return count  
}

