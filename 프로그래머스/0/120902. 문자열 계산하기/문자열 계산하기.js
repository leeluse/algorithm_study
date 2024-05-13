function solution(my_string) {
    var oper = ''
    var temp = 0
    my_string.split(' ').forEach((v) => {
        if(!parseInt(v)) {
            oper = v
        } else if(parseInt(v) && oper == '') {
            temp += parseInt(v)
        } else if(parseInt(v) && oper == '+') {
            temp += parseInt(v)
            
        } else if(parseInt(v) && oper == '-') {
            temp-= parseInt(v)
        }
        
    })

    return temp
}


