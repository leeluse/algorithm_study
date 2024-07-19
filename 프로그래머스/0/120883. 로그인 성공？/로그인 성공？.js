function solution(id_pw, db) {
    const hash = {}
    
    for (let data of db) {
        hash[data[0]] = data[1]
    }
    
    if(Object.keys(hash).includes(id_pw[0])) {
        if(hash[id_pw[0]] === id_pw[1]) {
            return "login"
        } return "wrong pw"
    }
    return "fail"
}