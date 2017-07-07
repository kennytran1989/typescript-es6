let displayColors= function(message,...color:string[]){
    console.log(message);
    console.log(color);
   
   
}
let message="Hello";

displayColors(message,'Red');
displayColors(message,'Red','Green');
displayColors(message,'Red','Green','Blue');


let displayColors2= function(...color){
    console.log(color);
}

displayColors2("red");
displayColors2("red","green");