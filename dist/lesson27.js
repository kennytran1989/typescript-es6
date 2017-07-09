var pe1 = {
    fname: "Tedu",
    lname: "Online",
    old: 2
};
console.log(pe1.fname + " " + pe1.lname + " " + pe1.old);
var pe2 = {
    fname: "Tedu2",
    lname: "Online2",
};
function printLabel(labelledObj) {
    //labelledObj.label=11; // sai vi label la thuoc tinh chỉ đọc của interface LabelledValue
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//printLabel(myObj.size); // sai vi interface LabelledValue ko co thuoc tính size   
//# sourceMappingURL=lesson27.js.map