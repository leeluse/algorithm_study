function solution(nums) {
    const setNums = new Set(nums)
    return nums.length/2 < setNums.size ? nums.length/2 : setNums.size
    
}