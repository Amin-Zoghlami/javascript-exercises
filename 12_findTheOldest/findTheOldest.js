const findTheOldest = function(people) {
    const date = new Date();
    return people.reduce((prev, curr) => { 
        
        prevAge = prev.yearOfDeath === undefined 
            ? date.getFullYear() - prev.yearOfBirth 
            : prev.yearOfDeath - prev.yearOfBirth;
        
        currAge = curr.yearOfDeath === undefined 
            ? date.getFullYear() - curr.yearOfBirth 
            : curr.yearOfDeath - curr.yearOfBirth;

        if (currAge > prevAge) {
            return curr;
        }

        return prev;
    }, {yearOfBirth: date.getFullYear()});
};

// Do not edit below this line
module.exports = findTheOldest;
