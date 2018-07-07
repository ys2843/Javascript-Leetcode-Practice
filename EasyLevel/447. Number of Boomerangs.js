/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    function getDistance (a, b) {
        return Math.pow((a[0] - b[0]), 2)+ Math.pow((a[1] - b[1]), 2);
    }
    function array(m,n){
        return factorial(m,n);//就是数学里的Amn,上面是n，下面是m
    }
    function factorial(m,n){
        var num = 1;
        var count = 0;
        for(var i = m;i > 0;i--){
            if(count == n){
                break;
            }
            num = num * i;
            count++;
        }
        return num;
    }
    var result = 0;
    for (let i = 0; i < points.length; i++) {
        var set = {};
        for (let j = 0; j < points.length; j++) {
            if (points[i] == points[j]) {
                continue;
            }
            var dis = getDistance(points[i], points[j]);
            set[dis] = set[dis] ? set[dis] + 1 : 1;
        }
        for (let ele in set) {
            if (set[ele] > 1) {
                result += array(set[ele], 2);
            }
        }
    }
    return result;
};