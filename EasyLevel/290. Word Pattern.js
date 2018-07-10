var wordPattern = function(pattern, str) {
    let obj1={}, obj2={};
    let arr1 = pattern.split(''), arr2 = str.split(' ');
    if(arr1.length!==arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if(obj1[arr1[i]] && obj1[arr1[i]]!==arr2[i]) return false;
        if(obj2[arr2[i]] && obj2[arr2[i]]!==arr1[i]) return false;
        obj1[arr1[i]] = arr2[i];
        obj2[arr2[i]] = arr1[i];
    }
    return true;
};