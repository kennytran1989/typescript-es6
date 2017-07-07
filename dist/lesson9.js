var employ = {
    id: 1,
    info: function () {
        console.log(this.id);
    }
};
employ.info();
var employ2 = {
    id: 2,
    info: function () {
        setTimeout(function () {
            console.log(this.id);
        }, 1000);
    }
};
employ2.info(); //undefined do tu this luc nay dang hiêu trong function cua hàm settimeout nen no ko hieu duoc thuoc tinh id cua object employ
var employ3 = {
    id: 3,
    info: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
    }
};
employ3.info();
var employ4 = {
    id: 4,
    info: function () {
        var _this = this;
        var self = this;
        setTimeout(function () { return console.log(_this.id); }, 1000); //dung arrow function de xuât thuoc tinh id cua object employ4
    }
};
employ4.info();
//# sourceMappingURL=lesson9.js.map