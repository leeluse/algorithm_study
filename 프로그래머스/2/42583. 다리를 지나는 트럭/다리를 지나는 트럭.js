function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let bridge = Array(bridge_length).fill(0);
    let w = 0;

    while (truck_weights.length > 0 || w > 0) {
        // 현재 시간이 1초 지나고 있다
        count ++;
        // 다리를 지난 트럭의 무게 제거하기
        w -= bridge.shift();
        
        // 대기 중인 트럭이 존재하며 현재 다리 위를 건너는 트럭의 무게를 더했을 때 넘지 않는 경우
        if(truck_weights.length > 0 && w + truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            bridge.push(truck);
            w += truck;
        } else {
            bridge.push(0);
        }
    }
    return count;
}
