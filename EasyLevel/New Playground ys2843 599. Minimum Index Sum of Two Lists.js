/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const table = {};
    const res = [];
    let min = Infinity;
    list1.forEach((ele, i) => {
        if (list2.includes(ele)) {
        table[ele] = i + list2.indexOf(ele);
        min = Math.min(min, table[ele]);
    }
});
    for (let e in table) {
        if (table[e] === min) {
            res.push(e);
        }
    }
    return res;
};