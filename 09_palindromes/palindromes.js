const palindromes = function (str) {
    let a = 0;
    let b = str.length - 1;
    while (a < b) {
        let ch1 = str.charAt(a).toLowerCase();
        let ch2 = str.charAt(b).toLowerCase();
        
        if ((ch1 < 'a' || 'z' < ch1) && (ch1 < '0' || '9' < ch1)) {
            a++;
            continue;
        }

        if ((ch2 < 'a' || 'z' < ch2) && (ch2 < '0' || '9' < ch2)) {
            b--;
            continue;
        }

        if (!(ch1 === ch2)) {
            return false;
        }

        a++;
        b--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
