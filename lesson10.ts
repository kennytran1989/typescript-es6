let getBonus = function(value =10,tax=20){
    console.log(value + tax);
}
getBonus(40);//truyền paramater cho value
getBonus(undefined,30);//truyen paramater cho tax undefined truyen vao de function hieu lấy value =10 la mac dinh

var getBonus2 = function(value =10,tax=value * 0.1){
    console.log(value + tax);
}
getBonus2(20,undefined);//tham so paramater thu 2 se mac dinh theo tham so do duoc truyen dinh nghia trong hàm


let getPersent=()=>2;//arrow function
var getBonus3 = function(value =10,tax=value * getPersent()){//gán gia tri tham so thu 2 bang tham so thu nhat nhan voi 1 gia tri cua arrow function
    console.log(value + tax);
}
getBonus3(20);