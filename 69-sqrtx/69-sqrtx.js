/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
    
    let result = 0;
    let odd = 1;
    let progressiveX = x;
    
    while(progressiveX > 0){
        progressiveX -= odd;
        odd += 2;
        result++;
    }
    
    return progressiveX < 0? --result : result;
};

//prog 7
//odd 3
//result 0