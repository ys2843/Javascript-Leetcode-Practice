/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var left = 0, right = letters.length - 1;
    while (left + 1 < right) {
        var mid = left + Math.floor((right - left)/2);
        if (letters[mid].charCodeAt() > target.charCodeAt()) {
            if (mid > 0 && letters[mid-1].charCodeAt() > target.charCodeAt()) {
                right = mid;
            } else {
                return letters[mid];
            }
        } else {
            left = mid;
        }
    }
    if (letters[left].charCodeAt() <= target.charCodeAt() && letters[right].charCodeAt() > target.charCodeAt()) {
        return letters[right];
    } else if (letters[left].charCodeAt() > target.charCodeAt()){
        return letters[left];
    } else {
        return letters[0];
    }
};