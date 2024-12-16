const sumAll = function(start, end) {
    if (typeof(start) !== "number" || typeof(end) !== "number"
        || start < 0 || end < 0 || start % 1 != 0 || end % 1 != 0) {
            return "ERROR"
        }
        
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    
    let sum = 0;
    for (;start <= end; start++) {
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
