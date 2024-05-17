function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    var X = [x1, x2, x3, x4]
    var Y = [y1, y2, y3, y4]
    var maxX = X.sort((a, b) => a-b)[X.length-1]
    var minX = X.sort((a, b) => a-b)[0]
    var maxY = Y.sort((a, b) => a-b)[Y.length-1]
    var minY = Y.sort((a, b) => a-b)[0]
    return (maxX-minX)*(maxY-minY)
    
    
}
