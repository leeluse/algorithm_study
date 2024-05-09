function solution(dot) {
    let answer = 0
    if (dot[0] > 0 && dot[1] > 0 ? answer = 1 :
        dot[0] < 0 && dot[1] > 0 ? answer = 2 :
        dot[0] < 0 && dot[1] < 0 ? answer = 3 :
        answer = 4)
        
    return answer;   
}