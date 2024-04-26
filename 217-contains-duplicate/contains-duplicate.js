/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsDict = {};
    for(let i=0; i < nums.length; i++){
        if(numsDict[nums[i]]) return true;
        numsDict[nums[i]] = true;
    }

    return false;
};