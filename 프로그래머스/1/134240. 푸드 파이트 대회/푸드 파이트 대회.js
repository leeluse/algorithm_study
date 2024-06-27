function solution(food) {
    foodArr = [];
    for (let i = 0; i < food.length; i++) {
        var foodI = food[i];

        if(foodI % 2 != 0) {
            foodI -= 1;
        }
        
        foodArr.push(String(i).repeat(foodI/2))
    }
    
    var str = foodArr.join('')
    var revStr = str.split('').reverse().join('')
    
    return str + 0 +revStr
    
}