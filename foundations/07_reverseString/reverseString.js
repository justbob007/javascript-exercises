const reverseString = function(string) {
    let stringArray = string.split("");
    let stringReverse = "";
    for (let i = 1; i < stringArray.length; i++) {
        stringReverse += stringArray.at(-i)
    }
    return stringReverse;
};




// Do not edit below this line
module.exports = reverseString;
