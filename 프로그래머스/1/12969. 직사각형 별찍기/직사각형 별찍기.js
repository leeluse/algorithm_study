process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(Number);
    
    let str = ''
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            str += "*";
        }
        // console.log("끝", str)
        str += '\n';
    }
    
    console.log(str)
});

