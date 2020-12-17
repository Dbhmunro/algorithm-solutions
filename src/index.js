// Two sum problem
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Using the two-pointer approach - O(n)

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
// Using two(three) pointer approach - O(n)

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


// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Using two pointer approach - O(n)
// Original splice solution is O(n^2)

var removeDuplicates = function(nums) {
    //     let first = 0
    //     let second = 1
        
    //     while (second < nums.length) {
    //         if (nums[first] === nums[second]) {
    //             nums.splice(first, 1)
    //         } else {
    //             first++
    //             second++
    //         }
    //     }
        
    //     return nums.length
        
    let i = 0
    
    for (let j = 0; j < nums.length; j++) {
        
        if (nums[i] != nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    
    return i + 1
};