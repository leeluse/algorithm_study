function solution(s) {
    const arr = [...s.split(' ')];
    const word = [];
    
    for (const a of arr) {
        const newArr = a.split('');
        const apl = [];
        
        for(let i = 0; i<newArr.length; i++) {
            if(i == 0) {
                apl.push(newArr[i].toUpperCase())
            } else {
                apl.push(newArr[i].toLowerCase())
            }
        }
        word.push(apl.join(''))
    }
    
    return word.join(' ')
}