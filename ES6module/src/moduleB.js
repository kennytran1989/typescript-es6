//cach 1
//export let fname="TEDU";
//export let lname="Online chanel";
//cach 2
let fname="TEDU";
let lname="Online chanel";
let obj={
    name:"TEDU"
};
let fname2= "Kenny";
let lname2="Tran";
export default fname2;// export default 1 biến bất kỳ

export{fname,lname,obj};


//export class va functione


export function greet(message){
    console.log(message);
}

export class Employee{
    constructor(){
        console.log("Employee Constructor");
    }    
    greeting(message){
        return message;
    }
}