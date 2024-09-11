function solution(n) {
    let count = 0;
    const colUsed = Array(n).fill(false);  // 열 확인
    const leftUsed = Array(n*2-1).fill(false);// 왼쪽 아래 대각선
    const rightUsed = Array(n*2-1).fill(false);// 오른쪽 아래 대각선
    
    function placeQueen(row) {
        if(row == n) {
            count += 1;
            return;
        }
        for(let i = 0; i < n; i++) {
            if(!colUsed[i] && !leftUsed[i+row] && !rightUsed[row-i+n-1]) {
                colUsed[i] = leftUsed[i+row] = rightUsed[row-i+n-1] = true;
                placeQueen(row+1);
                colUsed[i] = leftUsed[i+row] = rightUsed[row-i+n-1] = false;          
            }
        }
    }
    
    placeQueen(0);
    return count;
}