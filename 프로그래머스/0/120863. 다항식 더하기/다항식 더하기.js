function solution(polynomial) {
    var splited = polynomial.split(' + ')
    
    var X = splited
            .filter((v) => v.includes('x'))
            .map((v) => v.split('x')[0] ? parseInt(v.split('x')[0])  : 1)

    
    // X가 포함되지 않은 상수만 포함
    var num = splited.filter((v) => !v.includes('x')).map(Number)
    
    if(num.length >= 1) {
       num = num.reduce((acc, cur) => acc + cur)
    }
    if(X.length >= 1) {
        X  = X.reduce((acc, cur) => acc + cur)
    }

    if(num.length == 0 && X.length !=0) {
        return X == 1  ? "x" : X+"x"
        
    } else if(num.length != 0 && X.length !=0) {
        return X  == 1  ? "x"+  " + "+ num:
                        X+"x"+  " + "+ num
    } else if(num.length != 0 && X.length ==0) {
        return num.toString()
    }
    

}