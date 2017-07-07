var displayColorSpread = function (message) {
    var color = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        color[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(color);
    for (var i_1 in color) {
        console.log(color[i_1]);
    }
};
var messageSpread = "Hello";
var colorSpread = ["red", "green", "blue"];
displayColorSpread.apply(void 0, [messageSpread].concat(colorSpread));
//# sourceMappingURL=lesson12.js.map