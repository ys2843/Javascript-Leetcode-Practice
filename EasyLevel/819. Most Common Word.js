/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var maps = {};
    paragraph.split(" ").forEach(function (ele) {
        ele = ele.toLowerCase();
        if ("!?',;.".includes(ele.charAt(ele.length-1))) {
            ele = ele.slice(0, -1);
        }
        if (banned.includes(ele)) {
            return;
        }
        if (ele in maps) {
            maps[ele]++;
        } else {
            maps[ele] = 1;
        }
    });
    var maxIndex = -Infinity;
    var maxTag;
    for (let e in maps) {
        if (maps[e] > maxIndex) {
            maxTag = e;
            maxIndex = maps[e];
        }
    }
    return maxTag;
};