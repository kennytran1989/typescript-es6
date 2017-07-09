let arr1:string[]= ["Hello","World"];
let arr2:number[]= [1,2,3,4,5];
let arrAny:any[]=[10,"Kenny",true];
let arr3:Array<string>=["TEDU","Online"];

console.log(arr1[0]);


//tuple

let student: [string,number,boolean];
student=["Kenny",29,true];
//student=["kenny","Developer","true"]; //sai vì mang studen chỉ định theo thu tự la string,number,boolean
student[2]=false;
//student[2]="test"; // sai vi phan tu thu 3 duoc xac dinh la kieu boolean
student[3]="developer";
console.log(student);