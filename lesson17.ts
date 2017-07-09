class person{
    run(){
        console.log("Person is running...");
    }
}

let p1=new person();
console.log(p1.run === person.prototype.run);
console.log(p1.run());