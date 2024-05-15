function solution(quiz) {
    let answer = []
    quiz.forEach((x) => {
        let oper = x.split(' ')
         const X = Number(oper[0])
         const Y = Number(oper[2])
        let calc = 0
        if(oper[1] == '+') {
            calc = X + Y;
        } else {
            calc = X - Y;
        }
        
        if(calc == oper[4]) {
            answer.push("O")
        } else {
            answer.push("X")
        }
    })
    return answer
}