var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person3 = (function () {
    function person3(name) {
        console.log(name + " Person3 constructor...");
    }
    person3.prototype.getid = function () {
        return 10;
    };
    return person3;
}());
var employ5 = (function (_super) {
    __extends(employ5, _super);
    function employ5(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employ constructor...");
        return _this;
    }
    employ5.prototype.getId = function () {
        return _super.prototype.getid.call(this); //goi ham getID() cua lop cha person3
    };
    return employ5;
}(person3));
var empl = new employ5("TEDU");
console.log(empl.getId());
//# sourceMappingURL=lesson19.js.map