var person2 = (function () {
    function person2(nameinput) {
        this.name = nameinput;
        console.log(this.name + " is Constuctor.");
    }
    person2.talk = function () {
        console.log("This is method static");
    };
    person2.prototype.run2 = function () {
        console.log("This is method normal");
    };
    return person2;
}());
var p2 = new person2("TEDU");
p2.run2();
person2.talk();
//# sourceMappingURL=lesson18.js.map