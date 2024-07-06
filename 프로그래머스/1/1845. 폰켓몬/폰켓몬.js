function solution(nums) {
    var count = 0
    var dic = new Set([...nums]).size
    
    return dic < nums.length / 2 ? dic : nums.length / 2
}