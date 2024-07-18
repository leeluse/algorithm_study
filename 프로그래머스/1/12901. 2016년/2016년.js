function solution(a, b) {
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    var day = 0
    
    for (let i = 0; i < a; i++) {
        if(i == a-1) {
            day += b
            break
        }
        day += month[i]
    }
       return week[day%7]
    
}