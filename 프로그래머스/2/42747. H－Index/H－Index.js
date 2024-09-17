function solution(citations) {
    const sortArr = [...citations].sort((a, b) => b-a);
    let hIndex = 0;
    
    for(let i =0; i < citations.length; i++) {
       // h-index는 논문의 인용 횟수가 그 이상인 논문들의 개수보다 크거나 같을 때 성립
        if(sortArr[i] >= i+1) {
            hIndex = i+1;
        } else {
            break;
        }
    }
    return hIndex;
}
