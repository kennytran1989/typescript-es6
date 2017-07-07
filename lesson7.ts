let isDone = false;
console.log(isDone);

let decimal:number = 10;
console.log(decimal);

let bool:boolean=true;
console.log(bool);

let color:string ="blue";
console.log(color);

//cach 1 nối chuỗi
let fullname:string ="kenny";
let age:number =10;
let sentense:string=`
    hello,My name is ${ fullname }. Age ${age+1}

`;
console.log(sentense);
//cach 2
let tong:number= age+1;
let test:string =`
    hello test`+ " "+ fullname + " " + tong
;
console.log(test);

//cach 1 khai bao mảng
let mang:number[]=[1,2,3];
console.log(mang);

//cach 2
let mang2:Array<number> = [4,5,6];
console.log(mang2);

//mảng số va chữ
let mang3:[string,number]= ["hello",10];
console.log(mang3);

//lỗi mình khai báo type la string number nhung value la number string
//let mang4:[string,number]=[10,"hello"];
//console.log(mang4);

enum color1 {red,green,blue};
let c:color1=color1.green;
console.log(c);


