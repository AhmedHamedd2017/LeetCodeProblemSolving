/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr, lo, hi) {
    const loIndex = lo || 0;
    const hiIndex = hi || arr.length - 1;
    
    const mid = loIndex + Math.floor((hiIndex - loIndex) / 2);
    
    if(arr[mid] < arr[mid + 1]) return peakIndexInMountainArray(arr, mid + 1, hi);
    
    if(arr[mid] < arr[mid - 1]) return peakIndexInMountainArray(arr, lo, mid - 1);
    
    return mid
};


