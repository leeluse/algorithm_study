function solution(players, callings) {
    var person = {};
    players.forEach((v, i) => person[v] = i);
    
    callings.forEach((c) => {
        
        var idxCur = person[c]
        var idxPrev = players[idxCur-1]
        var temp = idxPrev
        
        players[idxCur-1] = c 
        players[idxCur] = temp
        
        person[c] --;
        person[players[idxCur]] ++;
    })

    
    return players
}