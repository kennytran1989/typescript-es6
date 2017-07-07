let displayColorSpread= function(message,...color:string[]){
    console.log(message);
    console.log(color);
    for(let i in color){
        console.log(color[i]);
    }
   
}
let messageSpread="Hello";
let colorSpread=["red","green","blue"];
displayColorSpread(messageSpread,...colorSpread);
