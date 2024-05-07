/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const getCharCode = (char) => {
    return char.charCodeAt(0) - "a".charCodeAt(0)
};

var groupAnagrams = function (strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const frequency = Array(26).fill(0);
        for (let char of strs[i]) {
            frequency[getCharCode(char)] += 1;
        }
        const stringFrequency = frequency.toString()
        const mapValue = map.get(stringFrequency) || [];
        mapValue.push(strs[i]);
        map.set(stringFrequency, mapValue);
    }

    console.log(map.values())
    return [...map.values()]
};