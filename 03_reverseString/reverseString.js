const reverseString = function (startingString) {
    let str = '';
    for (let i = startingString.length-1; i >= 0; i--){
        str += startingString.charAt(i);
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
