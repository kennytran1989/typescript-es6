var isDone = false;
console.log(isDone);
var decimal = 10;
console.log(decimal);
var bool = true;
console.log(bool);
var color = "blue";
console.log(color);
//cach 1 nối chuỗi
var fullname = "kenny";
var age = 10;
var sentense = "\n    hello,My name is " + fullname + ". Age " + (age + 1) + "\n\n";
console.log(sentense);
//cach 2
var tong = age + 1;
var test = "\n    hello test" + " " + fullname + " " + tong;
console.log(test);
//cach 1 khai bao mảng
var mang = [1, 2, 3];
console.log(mang);
//cach 2
var mang2 = [4, 5, 6];
console.log(mang2);
//mảng số va chữ
var mang3 = ["hello", 10];
console.log(mang3);
//lỗi mình khai báo type la string number nhung value la number string
//let mang4:[string,number]=[10,"hello"];
//console.log(mang4);
var color1;
(function (color1) {
    color1[color1["red"] = 0] = "red";
    color1[color1["green"] = 1] = "green";
    color1[color1["blue"] = 2] = "blue";
})(color1 || (color1 = {}));
;
var c = color1.green;
console.log(c);
//# sourceMappingURL=lesson7.js.map