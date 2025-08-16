function solution(topping) {
    let count = 0;
    const dic = new Set();
    const harfDic = new Set();
    
    const toppingCounter = new Map();
    
    for(const t of topping) {
      toppingCounter.set(t, (toppingCounter.get(t) || 0) + 1);
    }
    
    const halfTopping = new Set();
    
    for(const t of topping) {
        halfTopping.add(t);
        toppingCounter.set(t, toppingCounter.get(t)-1);
        
        if(toppingCounter.get(t) == 0) {
            toppingCounter.delete(t);
        }
        
        if(halfTopping.size === toppingCounter.size) {
            count += 1;
        }
    }
    
    return count;

}
