var getBonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = 20; }
    console.log(value + tax);
};
getBonus(40); //truyền paramater cho value
getBonus(undefined, 30); //truyen paramater cho tax undefined truyen vao de function hieu lấy value =10 la mac dinh
var getBonus2 = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * 0.1; }
    console.log(value + tax);
};
getBonus2(20, undefined); //tham so paramater thu 2 se mac dinh theo tham so do duoc truyen dinh nghia trong hàm
var getPersent = function () { return 2; }; //arrow function
var getBonus3 = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getPersent(); }
    console.log(value + tax);
};
getBonus3(20);
//# sourceMappingURL=lesson10.js.map