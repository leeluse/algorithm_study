function solution(nums) {
    var res = []
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k<nums.length; k++) {
                res.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    // isPrime
    return res.filter((v) => {
        for(let i = 2; i < v; i++) {
            if(v%i  == 0) {
                return false
            }
        }
        return true
    }).length
    
}