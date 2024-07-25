function solution(enroll, referral, seller, amount) {
    const enrAndRef = {}
    const result = {}
    
    for (let i = 0; i < enroll.length; i++) {
        enrAndRef[enroll[i]] = referral[i];
        result[enroll[i]] = 0;
    }
    
    for (let i = 0; i < seller.length; i++) {
        let giver = seller[i]
        let myAmount = amount[i]*100
        
        while (giver !== '-' && myAmount > 0) {
            const commission = Math.floor(myAmount * 0.1);
            result[giver] += myAmount - commission;
            myAmount = commission;
            giver = enrAndRef[giver];
        }
        
        if (giver !== '-') {
            result[giver] += myAmount;
        }
    }
    
    const answer = []
    
    for (let i in result) {
        answer.push(result[i])
    }
    
    return answer
    
}