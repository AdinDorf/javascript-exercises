const removeFromArray = function(arr, remove) {
    return arr.filter((element) => {
       return element != remove;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
