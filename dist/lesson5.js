var _loop_1 = function (i_1) {
    //console.log(i);
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
//cach 2:dung iif (immediately invoked funtion)
for (var i = 1; i <= 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 2000);
    })(i);
}
//# sourceMappingURL=lesson5.js.map