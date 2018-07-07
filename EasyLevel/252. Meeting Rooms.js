/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    // can't attend if the next meeting starts before the previous ends
    for (let i = 1; i < intervals.length; i++)
        if (intervals[i].start < intervals[i-1].end) return false;

    return true;
};