/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var map = {10: 0, 5: 0};
    for (let i = 0; i < bills.length; i++) {
        map[bills[i]] = map[bills[i]] > 0 ? map[bills[i]] + 1 : 1;
        var change = bills[i] - 5;
        if (change == 5) {
            map[5]--;
        } else if (change == 15){
            if (map[10]) {
                map[10]--;
                map[5]--;
            } else {
                map[5] -= 3;
            }
        }
        if (map[10] < 0 || map[5] < 0) {
            return false;
        }
    }
    return true;
};