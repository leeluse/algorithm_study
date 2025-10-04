function solution(arr) {
    const result = [0, 0];
    
    function compress(arr) {
        const first = arr[0][0];
        let allSame = true;
        
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                if(arr[i][j] !== first) {
                    allSame = false;
                    break;
                }
            }
            if(!allSame) break;
        }
        
        if(allSame) {
            result[first]++;
            return;
        }
        
        const n = arr.length;
        const half = n / 2;
        
        const topLeft = arr.slice(0, half).map(row => row.slice(0, half));
        const topRight = arr.slice(0, half).map(row => row.slice(half));
        const bottomLeft = arr.slice(half).map(row => row.slice(0, half));
        const bottomRight = arr.slice(half).map(row => row.slice(half));
        
        compress(topLeft);
        compress(topRight);
        compress(bottomLeft);
        compress(bottomRight);
    }
    
    compress(arr);
    return result;
}

