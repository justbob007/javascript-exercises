const removeFromArray = function(initialArray, ...removeArguments) {
    function isArgument(num) {
        for (let i = 0; i < removeArguments.length; i++) {
            if (num === removeArguments[i]) {
                return false;
            }
        }
        return true;

    }
    return initialArray.filter(isArgument)
};

// Do not edit below this line
module.exports = removeFromArray;
