class person2{
    
    constructor(nameinput){
        this.name = nameinput;
        console.log(this.name+ " is Constuctor.");
    }
    static talk(){
        console.log("This is method static");
    }
    run2(){
        console.log("This is method normal");
    }
}
let p2=new person2("TEDU");
p2.run2();
person2.talk();