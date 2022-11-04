/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const indices = [];
    const newNums = [...nums];
    
    newNums.sort((a,b) => a - b)
    
    newNums.forEach((num,index) => {
        if(num === target) indices.push(index)
    });
    
    return indices;
};