function solution(arr) {
    const result = [0, 0];
    
    function compress(grid) {
        const first = grid[0][0];
        const allSame = grid.every(row => row.every(val => val === first));
        
        if(allSame) {
            result[first]++;
            return;
        }
        
        const n = grid.length;
        const half = n / 2;
        
        const topLeft = grid.slice(0, half).map(row => row.slice(0, half));
        const topRight = grid.slice(0, half).map(row => row.slice(half));
        const bottomLeft = grid.slice(half).map(row => row.slice(0, half));
        const bottomRight = grid.slice(half).map(row => row.slice(half));
        
        compress(topLeft);
        compress(topRight);
        compress(bottomLeft);
        compress(bottomRight);
    }
    
    compress(arr);
    return result;
}