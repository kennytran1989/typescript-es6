var person = (function () {
    function person() {
    }
    person.prototype.run = function () {
        console.log("Person is running...");
    };
    return person;
}());
var p1 = new person();
console.log(p1.run === person.prototype.run);
console.log(p1.run());
//# sourceMappingURL=lesson17.js.map