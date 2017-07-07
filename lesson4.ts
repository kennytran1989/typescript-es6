function greetPerson(name){
    let greet;
    if(name === "Chandler"){
          greet = "Hello Chandler";
    }else{
         greet = "Hi there";
    }
    //let greet; let ko hỗ tro hoisting ko the khai bao bien truoc khi su dụng
    console.log(greet);  
}
greetPerson("Chandler");


var a=1;
let b=10;

if(a === 1){
    let b=5;//duoc khai bao vi trong phạm vi 1 block cua if
    var a=7;
    let c=90;
    console.log(b);
    console.log(c);
};
//let b=8; không thể khai bao biến b vi bien b da duoc khai bao o pham vi phia tren khong duoc khai bao bien b lai lan 2
console.log(a);
console.log(b);
