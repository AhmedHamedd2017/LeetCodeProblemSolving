// var isPalindrome = function(x) {
//   let strx = x.toString().split('');
//   let str = new Array();
//   for(let i=0;i<x.toString().length;i++){
//       str.push(strx.pop());
//       if(x.toString()[i] !== str[i]){
//           return false;
//       }
//   }
//   return true;
// };

var isPalindrome = function(x) {
    if(x <0){
        return false;
    }else{
        let temp = x;
        let rev = 0;
        while(temp !== 0){
            rev = rev*10 + parseInt(temp%10);
            temp /= 10;
            temp = parseInt(temp);
        }
        if(rev === x){
            return true;
        }else{
            return false;
        }
    }
  };

console.log(isPalindrome(-101));