//策略模式
var strategies = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
}

var calculate = function(type, a, b){
    return strategies[type](a, b);
}

console.log(calculate('add', 2 ,3));
console.log(calculate('multiply', 2 ,3));