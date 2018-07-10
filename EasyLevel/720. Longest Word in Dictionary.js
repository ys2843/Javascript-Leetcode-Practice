/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    let res = "";
    const set = new Set();
    words.forEach((ele) => {
        if (ele.length == 1 || set.has(ele.slice(0, -1))){
        res = res.length < ele.length ? ele : res;
        set.add(ele);
    }
});
    return res;
};