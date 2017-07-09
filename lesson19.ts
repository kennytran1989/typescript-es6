class person3{
    constructor(name){
        console.log(name+ " Person3 constructor...");
    }
    getid(){
        return 10;
    }
}

class employ5 extends person3{
    constructor(name){
        super(name);//goi constructor cua lop cha giong parent php
        console.log(name + " Employ constructor...");
    }
    getId(){
        return super.getid();//goi ham getID() cua lop cha person3
    }
}

let empl=new employ5("TEDU");

console.log(empl.getId());