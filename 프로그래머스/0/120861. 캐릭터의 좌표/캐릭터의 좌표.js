function solution(keyinput, board) {
    var arr = [0, 0]
    var maxX = Math.ceil(board[0]/2)
    var maxY = Math.ceil(board[1]/2)
    
    keyinput.forEach((key) => {
        key == 'left' ? arr[0] -= 1 : 
        key == 'right' ? arr[0] += 1 :
        key == 'up' ? arr[1] += 1 : arr[1] -= 1
        
        if (Math.abs(arr[0]) >= maxX) {
            console.log(arr[0],"가 X의  max를 넘어용")
            if(arr[0] <= 0) {
                arr[0] += 1
            } else {
                arr[0] -= 1
            }
        } else if (Math.abs(arr[1]) >= maxY) {
            console.log(arr[1],"가 X의  max를 넘어용")
             if(arr[1] <= 0) {
                arr[1] += 1
            } else {
                arr[1] -= 1
            }
        }
        
    })
    return arr
}