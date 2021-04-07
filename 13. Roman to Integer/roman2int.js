const values = new Map([
    ['I',1],
    ['V',5],
    ['X',10],
    ['L',50],
    ['C',100],
    ['D',500],
    ['M',1000]
]);
var romanToInt = function(s) {
    let intval = 0;
    let temp = 0;
    for(const val of s.split('').reverse()){
        if(values.get(val) >= temp){
            intval += values.get(val);
        }else{
            intval -= values.get(val);
        }
        temp = values.get(val);
    }
    return intval;
};

console.log(romanToInt('MCMXCIV'))