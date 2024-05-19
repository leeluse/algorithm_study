

function solution(dots) {
     let [dots_1, dots_2, dots_3, dots_4] = dots
     var count = 0
     
 function cal(a, b, c, d) {
        
    
     // 기울기
     if(((b[1] - a[1]) / (b[0] - a[0])) == ((d[1] - c[1]) / (d[0] - c[0]))) {
         count += 1;
     }
    }

     // 1,2 && 3.4
    cal(dots_1, dots_2, dots_3, dots_4)
     // 1,3 && 2.4
    cal(dots_1, dots_3, dots_2, dots_4)
     // 1,4 && 2.3
    cal(dots_1, dots_4, dots_2, dots_3)
     
    return count > 0 ? 1 : 0
}