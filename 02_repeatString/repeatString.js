const repeatString = function(str, num) {
    let retString = '';
    if (num < 0){
        return "ERROR";
    }
    for (let i = 0; i < num; i++)
    {
        retString += str;
    }
    return retString;
};

// Do not edit below this line
module.exports = repeatString;
