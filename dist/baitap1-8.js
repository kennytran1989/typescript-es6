var num = window.prompt("moi ban nhap so num");
var ketqua = function (num) {
    var result;
    if (isNaN(num)) {
        result = "ban vua nhap vao chu";
    }
    else if (num % 2 == 0) {
        result = "so" + " " + num + " " + "la so chan";
    }
    else {
        result = "so" + " " + num + " " + "la so le";
    }
    return result;
};
console.log(ketqua(num));
//# sourceMappingURL=baitap1-8.js.map