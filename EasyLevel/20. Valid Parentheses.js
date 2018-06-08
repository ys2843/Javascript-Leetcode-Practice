/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var result = true;
    s.split('').forEach(function (ele) {
        switch (ele) {
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            case '(':
                stack.push(')');
                break;
            case '}':
                if (stack.pop() !== '}') {
                    result = false;
                }
                break;
            case ']':
                if (stack.pop() !== ']') {
                    result = false;
                }
                break;
            case ')':
                if (stack.pop() !== ')') {
                    result = false;
                }
        }
    });
    return stack.length === 0 && result;
};