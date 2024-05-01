/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// ["eat","tea","tan","ate","nat","bat"]
function getCode(char){
    return char.charCodeAt(0) - "a".charCodeAt(0);
};

var groupAnagrams = function(strs) {
    const anagramMap = new Map();

    for(let str of strs){
        const frequency = new Array(26).fill(0);
        for(let char of str){
            frequency[getCode(char)]++;
        }
        
        const values = anagramMap.get(frequency.toString()) || [];
        values.push(str);
        anagramMap.set(frequency.toString(), values)
    }

    return [...anagramMap.values()]
};