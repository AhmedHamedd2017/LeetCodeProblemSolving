/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    
    let mid = -1;
    let lastVal = {};

    while(lo <= hi){
        mid = Math.floor((hi-lo) /2) + lo;
        lastVal = {index: mid, val: nums[mid]}
        
        if(target === nums[mid]) return mid;
        
        if(target < nums[mid]) hi = mid - 1;
        
        if(target > nums[mid]) lo = mid + 1;
    }
    
    return lastVal.val > target? lastVal.index : lastVal.index + 1;
};

//7
// 1 , 3 , 5 , 6

//lo = 0 (1) hi = 3 (6)
//mid = 3-0 /2 = 1.5 => 1 + 0 = 1 (3)

// lo = 2 (5) hi = 3 (6)
// mid = 3-2 /2 = 0.5 => 0 + 2 = 2 (5)

//lo = 3 (6) hi = 3 (6)