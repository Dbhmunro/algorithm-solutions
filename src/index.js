// Two sum problem
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Using the two-pointer approach

var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length-1
    
    while (left<right){
        const currSum = numbers[left] + numbers [right]
        if ( currSum < target) {
            left++
        } else if (currSum > target) {
            right--
        } else {
            return [left+1, right+1]
        }
    }
    
    return false
};