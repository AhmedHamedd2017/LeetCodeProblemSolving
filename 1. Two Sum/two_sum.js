// --- Brute Force --- O(N^2)
// var twoSum = function(nums, target) {
//     let x = 1;
//     for(let i=0;i<nums.length;i++){        
//         for(let j=0;j<nums.length;j++){
//             if(i!== j  && nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     };
// };

var hash = function(s) {
    /* Simple hash function. */
    var a = 1, c = 0, h, o;
    if (s) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        for (h = s.length - 1; h >= 0; h--) {
            o = s.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
        }
    }
    return String(a);
};

var twoSum = function(nums, target) {
    console.log(nums)
    for(let i=0;i<nums.length;i++){
        nums[hash(nums[i])] = i;
    }
    console.log(Object.keys(nums))
    console.log(nums)
    for(let i=0;i<nums.length;i++){
        let complement = hash(target - nums[i]);
        if(nums.hasOwnProperty(complement))
        {
            return [i,parseInt(complement)];
        }
    }
    return 0;
};

console.log(twoSum([2,7,11,15],9))
