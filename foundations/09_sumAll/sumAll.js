const sumAll = function(beg, end) {
    if ((!(Number.isInteger(beg) && beg>0)) || (!(Number.isInteger(end) && end>0))) {
        return 'ERROR'
    }
    else {
        if (end<beg) {
            [end,beg] = [beg,end];
        }
        let sum = 0
        for (let i = beg; i <= end; i++) {
            sum+=i
        }
        return sum
    };
};  
// Do not edit below this line
module.exports = sumAll;
