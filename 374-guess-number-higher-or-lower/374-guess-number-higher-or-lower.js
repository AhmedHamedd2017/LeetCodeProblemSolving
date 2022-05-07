/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    
    if(guess(n) === 0) return n;
    
    let lo = 1;
    let hi = n;
    
    while(lo <= hi){
        let mid = Math.floor((hi - lo) / 2) + lo;
        let guessed = guess(mid);
        
        if(guessed === 0) return mid;
        
        // Your guess is lower than the number I picked
        if(guessed === 1){
            lo = mid + 1;
        }
        
        // Your guess is higher than the number I picked
        if(guessed === -1){
            hi = mid - 1;
        } 
    }
    
};