function solution(wallpaper) {
    var [top, left, right, bottom] = [0, 0, 0, 0]
    var cul = []
    var row = []
    
    wallpaper.forEach((v, index) => {
        if(v.includes('#')) {
            cul.push(index) // 세로 값
            
            row.push(v.indexOf('#'))
            row.push(v.lastIndexOf('#')) // 가로 값
        }
    })
    

    // Math.max는 배열을 인수로 직접 받을 수 없기 때문에, 위의 코드에서 Math.max(t)를 실행하면 NaN이 반환됩니다. 배열을 개별 요소로 분해하여 전달해야 합니다.
    // 그러기 위해 스프레드를 사용
    // 세로의 최소, 최대
    top = Math.min(...cul)
    bottom = Math.max(...cul) + 1
    // 가로의 최소, 최대
    left = Math.min(...row)
    right = Math.max(...row) + 1
    
    return [top, left, bottom, right]
    
}