function class_one(){
    this.fun_one = function(){
        return "hellow_1";
    }
    this.fun_two = function(){
        return "hellow_2";
    }
}
let obj = new class_one();
console.log(obj.fun_one,obj.fun_two)

function ex(ar1,ar2){
    this.abc=ar1;
    this.cde=ar2;
}
let class1 = new ex("ramu","ramu2")
console.log(class1)

let class2 = new ex("ex1","ex2")
console.log(class2)

//prototype (predefinaed property)
function class_one(){

}
class_one.prototype.sub_one = "ReactJS";
class_one.prototype.sub_two = "Angular";

function class_two(){

}
class_two.prototype = Object.create(class_one.prototype)
class_two.prototype.sub_three = "three";

let obj1 = new class_one();
console.log(obj1)
let obj2 = new class_two();
console.log(obj2.sub_three, obj2.sub_one, obj2.sub_two)

//prototype chaining : Inheritance 

function x1(){

}
x1.prototype.fun1 = function(){
    return 100;
}
function x2(){

}
x2.prototype = Object.create(x1.prototype);
x2.prototype.fun1 = function(){
    return 200;
}
let ob1 = new x2();
console.log(ob1.fun1())