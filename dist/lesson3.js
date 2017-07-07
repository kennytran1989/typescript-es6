function greetPerson(name) {
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
    var greet;
    //hoisting là cơ chế default của JS để di chuyển các biến khai báo lên trên top(global) hoặc trên top của funtion
}
greetPerson("Chandler");
greetPerson("kenny");
//# sourceMappingURL=lesson3.js.map