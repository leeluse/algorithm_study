function solution(priorities, location) {
    const queue = Array.from({length: priorities.length}, (_, i) => i);
    let count = 0;
    

    while(queue.length !== 0) {
        const process = queue.shift();
        // priorities에 우선 순위가 더 높은 프로세스가 있다면
        if(priorities[process] < Math.max(...priorities)) {
            // 방금 꺼낸 프로세스를 다시 큐에 넣는다
            queue.push(process);
        // priorities에 우선 순위가 더 높은 프로세스가 없다면
        } else {
        // 방금 꺼낸 프로세스를 실행한다
            count += 1;
            priorities[process] = -1;
            if(process == location) {
                return count;
            }
        }
    }
    
}
