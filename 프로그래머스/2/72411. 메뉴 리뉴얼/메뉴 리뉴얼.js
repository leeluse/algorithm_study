function combinations(arr, n) {
    // 뽑을 개수가 1개일 경우 그대로 반환해 탈출
    if (n === 1) return arr.map((v) => [v]);
    const result = [];
    
    // 요소를 순환
    arr.forEach((fixed, idx, arr) => {
        // 현재 요소의 다음 요소까지 자르기
        const rest = arr.slice(idx+1);
        // 선택된 요소 이전 요소들을 제외하고 재귀 호출
        const combis = combinations(rest, n-1);    
        const combine = combis.map((v) => [fixed, ...v]);
        result.push(...combine)
    })
    return result    
}


function solution(orders, course) {
    // 답을 넣어줄 배열 생성
    const answer = [];
    
    // n개의 코스 요리를 정하기 위해 하나씩 가져오기
    for (const c of course) {
        // 코스 요리를 담기 위한 메뉴 생성
        const menu = [];
        // 코스 요리를 고르기 위한 orders 가져오기
        for (const order of orders) {
            // 코스 요리의 배열 자르고 정렬
            const orderArr = order.split("").sort();
            // 코스 요리의 조합 (split한 요리의 배열, 뽑을 개수)
            const comb = combinations(orderArr, c);
            // comb의 리턴 값을 menu에 push
            menu.push(...comb);
        }
        
        const counter = {}
        for (const m of menu) {
            const key = m.join('')
            counter[key] = (counter[key] || 0) + 1;
        }
        
         const max = Math.max(...Object.values(counter))
            
            if(max > 1) {
                for (const [key, value] of Object.entries(counter)) {
                    if(value === max) {
                        answer.push(key)
                    }
                }
            }
        
        
        
    }
    
    return answer.sort()
}

