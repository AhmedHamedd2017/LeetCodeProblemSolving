/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let dict = {};
    const result = [];
    
    nums1.forEach((n) => dict[n] = true);
    nums2.forEach((n) => {
        if(dict[n]){
             result.push(n)
            delete dict[n]
        }
    })
    
    return result;
};