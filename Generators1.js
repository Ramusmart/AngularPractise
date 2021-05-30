// with gennerators, developers can control flow of execution inside function call 
//Generations funcction introduced in ES6
//prfix with "*"
// have cursor mechanism
//with cursor mechanisem we can control flow of execution 


function *fun_one(){
    yield 10;
    yield 20;
    yield 30;
    yield 40;
    yield 50;
};
let cursor = fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());

