const removeFromArray = function(list, ...vals) {
    for (const val of vals) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === val) {
                list.splice(i, 1);
                i--;
            }
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
