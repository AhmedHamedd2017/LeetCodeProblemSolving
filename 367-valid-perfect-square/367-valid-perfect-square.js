/**
 * @param {number} num
 * @return {boolean}
 */
var warevar = function(lo, hi, num){
    const mid = lo + Math.floor((hi - lo) / 2);
    
    const midSqr = mid * mid;
    
    if(lo >= hi) return false;
    
    if(midSqr === num) return true;
    
    if(midSqr > num) return warevar(lo, mid, num);
    
    if(midSqr < num) return warevar(mid + 1, hi, num);
}

var isPerfectSquare = function(num) {
    if(num === 1) return true;
    return warevar(0,num,num);
};