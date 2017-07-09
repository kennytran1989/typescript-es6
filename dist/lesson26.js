//cach1
var employee = (function () {
    function employee(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return employee;
}());
//cách 2
var employee1 = (function () {
    function employee1(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return employee1;
}());
var e = new employee1("TEDU", "Online");
console.log(e.fname + " " + e.lname);
//# sourceMappingURL=lesson26.js.map