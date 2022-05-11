var solution = function(isBadVersion) {
    return function(n) {
        let lo = 0;
        let hi = n;
        
        let mid;
        let midDiff;
        
        while(true){
            midDiff = Math.ceil((hi-lo)/2);
            mid = lo + midDiff;
            
            if(midDiff === 1 && isBadVersion(mid)) return mid;
            
            if(isBadVersion(mid)){
                hi = mid;
            }else{
                lo = mid;
            }
        }
    };
};

//n=20 bad=12
     
// 0  - 20 => mid = 10 (not bad)
// 10 - 20 => mid = 15 (bad)
// 10 - 15 => mid = 12 (bad)
// 10 - 12 => mid = 11 (bad)
     
     