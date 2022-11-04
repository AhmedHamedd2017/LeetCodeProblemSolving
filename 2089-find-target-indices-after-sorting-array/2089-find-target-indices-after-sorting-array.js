/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let targetMatches = 0;
    let lessThaners = 0;
    
    nums.forEach((num) => {
        if(num === target) ++targetMatches;
        else if(num < target) ++ lessThaners;
    })
    
    return Array(targetMatches).fill().map((_, i) => lessThaners+i);
};