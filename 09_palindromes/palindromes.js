const palindromes = function (originalString) {

let cleanedString = originalString.split('').filter(
    (char) => {
        return /[a-zA-Z0-9]/g.test(char);
    }
).join('').toLowerCase();

let reversedString = cleanedString.split('').reduce(
    (accumulator, current) =>  current + accumulator, 
);

if (reversedString === cleanedString) return true;

return false;

};

// Do not edit below this line
module.exports = palindromes;
