interface person1{
    fname:string,
    lname:string,
    old?:number//dau ? de xac dinh thuoc tinh do ko bat buoc khi mot bien su dung interface
}

let pe1 : person1 = {
    fname:"Tedu",
    lname:"Online",
    old:2
}
console.log(pe1.fname+" "+pe1.lname+" "+pe1.old);

let pe2 : person1 = {
    fname:"Tedu2",
    lname:"Online2",
    
}


interface LabelledValue {
    readonly label: string;
}

function printLabel(labelledObj: LabelledValue) {
    //labelledObj.label=11; // sai vi label la thuoc tinh chỉ đọc của interface LabelledValue
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
//printLabel(myObj.size); // sai vi interface LabelledValue ko co thuoc tính size  