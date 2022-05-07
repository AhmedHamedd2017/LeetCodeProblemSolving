/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let max = -1;
    let maxIndex = -1;
    arr.forEach((num,index) => {
        if(num > max) {max = num; maxIndex = index;}
    })
    
    return maxIndex;
};