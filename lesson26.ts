//cach1
class employee{
    public fname:string;
    public lname:string;
    constructor(fname:string, lname:string){
        this.fname = fname;
        this.lname = lname;
    }
}
//cách 2
class employee1{
    constructor(public fname:string, public lname:string){

    }
}

let e=new employee1("TEDU","Online");
console.log(e.fname + " " +e.lname);