function solution(msg) {
  const alp = {}
  let cnt = msg.length
  const answer = []

  // 사전 초기화
  for(let i = 1; i <= 26; i++) {
      if(!alp[String.fromCharCode(i+64)]) {
          alp[String.fromCharCode(i+64)] = i
      }
  }
        
  while(cnt >= 0) {
    // msg의 최대 길이부터 가장 짧은 길이까지 슬라이스를 해 봄
    if(Object.keys(alp).includes(msg.slice(0, cnt))) {
      // 색인 번호 출력 & answer에 넣기
        answer.push(alp[msg.slice(0, cnt)])
      // 입력에서 처리되지 않은 문자 추가하기
        alp[msg.slice(0, cnt+1)] = Object.keys(alp).length + 1
        // 입력에서 w를 제거한다
        msg = msg.replace(msg.slice(0, cnt), '')
        cnt = msg.length
      } else {
        cnt -= 1  
      }
  }
  return answer
}

