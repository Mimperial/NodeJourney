// var counter = function(arr) {
//     return "There is" + arr.length + "elements in the array"
// }
var adder = function(a){
    return `the sum of the 2 number is ${a + pi}`;
}

var pi = 3.14
module.exports = {
    counter: function(arr) {
        return "There is" + arr.length + "elements in the array"
    },
    adder: adder,
    // pi:pi
}
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;