/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    var times = time.split("").sort().slice(0, -1);
    var map = {time: [], diff: Infinity};
    var inMin = time[0] * 600 + time[1] * 60 + time[3] * 10 + time[4] * 1;
    dfs([], times);
    function dfs (tmp, times) {
        if (tmp.length == 4) {
            if (!checkValid(tmp)) {return;}
            var timeinMin = getMinutes(tmp)
            var diff = inMin < timeinMin ? timeinMin - inMin : 1440 + timeinMin - inMin;
            if (diff < map.diff) {
                map.time = tmp.slice(0,2).join("") + ":" + tmp.slice(2,4).join("");
                map.diff = diff;
            }
            return;
        }
        for (let i = 0; i < times.length; i++) {
            tmp.push(times[i]);
            dfs(tmp, times);
            tmp.pop();
        }
    }
    function checkValid(time){
        return Number(time.slice(0,2).join("")) < 24 && Number(time.slice(2,4).join("")) < 60;
    }
    function getMinutes(time) {
        return time[0] * 600 + time[1] * 60 + time[2] * 10 + parseInt(time[3]);
    }
    return map.time;
};