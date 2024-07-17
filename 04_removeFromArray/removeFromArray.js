const removeFromArray = function(arr, ...toRemoveArr) {
    let newArr = arr;
    toRemoveArr.forEach(toRemove => {
        console.log("Removing " + toRemove);
        newArr = newArr.filter((element) => {
            return element !== toRemove;
         });
    });
    console.log("returning");
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
