/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length != B.length) {
        return false;
    }
    if (A == B) {
        for (let i = 0; i < A.length; i++) {
            if (A.lastIndexOf(A[i]) !== i) {
                return true;
            }
        }
        return false;
    }
    var firstIndex, secIndex;
    for (let i = 0; i < A.length; i++) {
        if (A[i] != B[i]) {
            if (firstIndex === undefined) {
                firstIndex = i;
            } else if (secIndex === undefined) {
                secIndex = i;
                if (A[firstIndex] == B[secIndex] && A[secIndex] == B[firstIndex]) {
                    return true;
                }
            } else {
                return false;
            }
        }
    }
    return false;
};

var buddyStrings_clever = function(A, B) {
    if (A.length != B.length) {
        return false;
    }
    let [dif, chars] = [[], new Set(A)];
    for (i in A) {
        if (A[i] != B[i]) {
            dif.push([A[i], B[i]]);
        }
    }
    return dif.length == 2 && dif[0].join() == dif[1].reverse().join() || (dif.length == 0 && chars.size != A.length);
};