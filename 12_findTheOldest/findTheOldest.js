const date = new Date().getFullYear();
const findTheOldest = function(people) {
    
function getAge(person) {
    if (!person.yearOfDeath)
        return date - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth
};

return people.reduce((oldest, current) => {
    let oldestAge = getAge(oldest);
    let currentAge = getAge(current);

    if (oldestAge < currentAge)
    {
        return current
    }
    return oldest
});

};

// Do not edit below this line
module.exports = findTheOldest;
