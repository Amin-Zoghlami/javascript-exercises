const reverseString = function(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
