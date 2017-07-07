for(let i=1;i<=5;i++){
    //console.log(i);
    setTimeout(function(){
        console.log(i);
        
    },1000);
}


//cach 2:dung iif (immediately invoked funtion)

for(var i=1; i<=5;i++){
    (function(x){
        setTimeout(function() {
            console.log(x);
        },2000);
    })(i)

}




