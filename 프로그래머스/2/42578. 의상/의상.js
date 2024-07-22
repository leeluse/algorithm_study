function solution(clothes) {
    let count = []
    const typeOfClothes = {}
    for (const c of clothes) {
        const type = c[1]
        if(!typeOfClothes[type]) {
            typeOfClothes[type] = 0
        }
        typeOfClothes[type] += 1
    }
    
    for (let clothes of Object.values(typeOfClothes)) {
        count.push(clothes + 1)
    }
    
    return count.reduce((acc, cur) => acc * cur) - 1
}