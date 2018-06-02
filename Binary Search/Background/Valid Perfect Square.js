/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num<0) return false;
    if(num===1) return true;
    let left = 0, right = Math.floor(num/2);
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let m2 = mid*mid;
        if(m2===num) return true;
        if(m2<num) left = mid+1;
        if(m2>num) right = mid-1;
    }
    return false;
};