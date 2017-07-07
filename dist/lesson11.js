var displayColors = function (message) {
    var color = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        color[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(color);
};
var message = "Hello";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Green');
displayColors(message, 'Red', 'Green', 'Blue');
var displayColors2 = function () {
    var color = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        color[_i] = arguments[_i];
    }
    console.log(color);
};
displayColors2("red");
displayColors2("red", "green");
//# sourceMappingURL=lesson11.js.map