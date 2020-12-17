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


// Sorted Squares problem
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Using two(three) pointer approach

var sortedSquares = function(nums) {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    const results = []
    let resultsPointer = nums.length - 1
    
    while (resultsPointer >= 0){
        let leftPointerSquare = nums[leftPointer]**2
        let rightPointerSquare = nums[rightPointer]**2
        
        if (leftPointerSquare > rightPointerSquare) {
            results[resultsPointer] = leftPointerSquare
            leftPointer++
        } else {
            results[resultsPointer] = rightPointerSquare
            rightPointer--
        }
        resultsPointer--
        
//         condensed lines of code example

//         let largerSquare = Math.max(leftPointerSquare, rightPointerSquare)
//         results[resultsPointer] = largerSquare
//         resultsPointer--
//         largerSquare === leftPointerSquare ? leftPointer++ : rightPointer--
    }
    
    return results
};