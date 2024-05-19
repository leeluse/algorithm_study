function solution(board) {
    const point = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
    var count = 0
    board.forEach((v, indexV) => {
        v.forEach((k, indexK) => {
            if(k == 1) {
              point.map((p) => {
                    let [x, y] = p;
                    [x, y] = [indexV + x, indexK + y];
                    if(x >= 0 && x < board.length && y >= 0 && y < board[indexV].length && board[x][y] == 0) {
                        board[x][y] = 2
                    }
                  
                })
            }
        })
        
    })
        
   board.forEach((v) => {
       v.forEach((k) => k == 0 && count++)
   })
   return count
}