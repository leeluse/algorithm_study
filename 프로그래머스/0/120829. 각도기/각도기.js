function solution(angle) {
    let answer; // answer를 지역 변수로 선언

    if (angle > 0 && angle <= 180) {
        if (angle < 90) {
            answer = 1; // 예각
        } else if (angle === 90) {
            answer = 2; // 직각
        } else if (angle < 180) {
            answer = 3; // 둔각
        } else {
            answer = 4; // 평각
        }
    } else {
        answer = 0; // 유효하지 않은 각도
    }
    
    return answer;
}
