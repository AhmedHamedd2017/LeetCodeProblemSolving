/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = new Map();

    for(let num of nums){
        const value = frequencyMap.get(num) || 0; 
        frequencyMap.set(num, value + 1);
    }

    return [...frequencyMap.entries()].sort((a,b) => b[1] - a[1]).splice(0, k).map((i) => i[0])
};