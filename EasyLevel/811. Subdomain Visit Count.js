/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var collection = {};
    cpdomains.forEach(function (ele) {
        var data = ele.split(' ');
        var domains = data[1].split('.');
        for (var i = 0; i < domains.length; i++) {
            var dom = domains.slice(i, data[1].length).join('.');
            if (collection.hasOwnProperty(dom)) {
                collection[dom] += parseInt(data[0],10);
            } else {
                collection[dom] = parseInt(data[0], 10);
            }
        }
    });
    var result = [];
    for (var prop in collection) {
        result.push(collection[prop] + ' ' + prop)
    }
    return result;
};