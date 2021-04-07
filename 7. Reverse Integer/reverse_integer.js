// var reverse = function(x) {
//     let strX = x.toString();
//     let returned = '';
//     let len;
//     if (strX > 0x7FFFFFFF) {
//         return 0;
//     }
//     if(strX[0] === '-'){
//         len = 1;
//         returned += '-'
//     }
//     else{
//         len = 0;
//     }
//     for(let i=strX.length-1;i>=len;i--){
//         returned = returned + strX[i]
//     }
//     return parseInt(returned);
// };

var reverse = function(x) {
    let pop;
    let rev = 0;
    if(x >= 2147483647 || x <= -2147483648){
        return 0;
    }
    while(x!=0){
        pop = x % 10;
        x /= 10;
        x = parseInt(x);
        rev = rev*10 + pop;
        if(rev >= 2147483647 || rev <= -2147483648){
            return 0;
        }
    }
    return rev;
};

console.log(reverse(1534236469))
console.log(reverse(-2147483412))