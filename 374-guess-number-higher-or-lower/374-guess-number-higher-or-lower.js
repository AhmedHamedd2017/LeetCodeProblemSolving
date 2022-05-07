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
var guesser = function(lo,hi){
    const mid = Math.floor((hi - lo) / 2) + lo;
    
    const guessed = guess(mid);
    
    if(guessed === 0) return mid;
    
    if(guessed === -1) return guesser(lo, mid-1);
    
    if(guessed === 1) return guesser(mid+1,hi);
}

var guessNumber = function(n) {
    if(guess(n) === 0) return n;
    
    return guesser(1,n);
};