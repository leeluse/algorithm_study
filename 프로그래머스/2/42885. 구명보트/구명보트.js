function solution(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let last = people.length - 1;
    
    while(last >= start) {
        count ++;
        
        if(people[start] + people[last] <= limit) {
            start ++;
            last --;
            
        } else {
            last --;
        }
    }
    return count;
}
