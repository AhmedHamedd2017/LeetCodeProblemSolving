/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n === 1) return 1;
    
    let tempCount = n;
    for(let i = 1; i <= n; i++){
        if(i > tempCount) return i - 1;
        
        tempCount -= i;
    }
};