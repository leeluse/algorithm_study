function solution(word) {
    let sum = 0;
    let char = ['A', 'E', 'I', 'O', 'U'];
    let num = [781, 156, 31, 6, 1];
    
    for(let i = 0; i < word.length; i++) {
        const idx = char.indexOf(word[i]);
        sum += idx * num[i] + 1;
    }
    return sum;
}




