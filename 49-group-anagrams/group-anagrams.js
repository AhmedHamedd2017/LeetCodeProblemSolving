/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sortedStrs = strs.map((str) => str.split("").sort().join(""))
    const dict = {};
    const result = [];

    for(let i = 0; i < sortedStrs.length; i++){
        if(dict[sortedStrs[i]] === 0 || dict[sortedStrs[i]]){
            result[dict[sortedStrs[i]]].push(strs[i])
        }else{
            dict[sortedStrs[i]] = result.length;
            result.push([strs[i]]);
        }
    }

    return result;
};