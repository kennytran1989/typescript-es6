import {fname,lname,obj} from './moduleB.js';
//fname="kenny" sai ko the thay doi gia tri cua thuoc tinh uoc import
obj.name="Changed";// doi value cua thuoc tính duoc import
obj.old="19";// co the thêm thuoc tính cho object duoc import
console.log(obj);
console.log(obj.name);
console.log(obj.old);
console.log(`${fname} ${lname}`);
import {default as name2} from './moduleB.js'; // co the dat dinh danh alias cho bien duoc export la default

console.log(`${name2}`);

//co the dat alias cho bien duoc import vào
//import {fname as f,lname as l} from './moduleB.js';
//console.log(`${f} ${l}`);


//import class va function
import {greet,Employee} from "./moduleB.js";
console.log("Example cho import function va class");
greet("TEDU");

let em=new Employee();
console.log(em.greeting("Wellcome to TEDU"));
