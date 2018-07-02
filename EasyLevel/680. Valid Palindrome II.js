const validPalindrome = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
        }
    }
    return true
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (s[i] != s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}