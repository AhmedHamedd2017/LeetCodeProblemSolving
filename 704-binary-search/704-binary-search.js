/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    let pivot = -1;
    
    while(left<=right){
        pivot = left + Math.floor((right - left) / 2);

        if(nums[pivot] === target){
            return pivot;
        }
        
        if(nums[pivot] > target){
            right = pivot - 1;
        }else if(nums[pivot] < target){
            left = pivot + 1;
        }
    }
    
    return -1;
};

// [0,1,2,3,4,5]