var singleNumber = function(nums) {
    let arr = []
    
    for(i=0; i<nums.length; i++){
        if(arr.includes(nums[i])){
           arr.splice(arr.indexOf(nums[i]),1)
        }
        else{
            arr.push(nums[i])
        }
    }
    
    return arr
};

console.log(singleNumber([4,1,2,1,2]))