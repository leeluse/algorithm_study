function solution(array) {
    const arrayInit = [...array]
    var sort = array.sort((a,b) => a-b)[array.length-1]
    
    return [sort, arrayInit.indexOf(sort)]
}