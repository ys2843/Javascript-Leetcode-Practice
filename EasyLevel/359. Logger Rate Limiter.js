/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.logObjects = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
 If this method returns false, the message will not be printed.
 The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.logObjects.hasOwnProperty(message)) {
        this.logObjects[message] = timestamp;
        return true;
    } else {
        if (timestamp - this.logObjects[message] >= 10) {
            this.logObjects[message] = timestamp;
            return true;
        } else {
            return false;
        }
    }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = Object.create(Logger).createNew()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */