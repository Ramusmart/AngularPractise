console.log("10"==10);
console.log("10"===10)
// this is just a demo
var arr = ["Pandu","moothi", "Palguthadi"];
arr.forEach((element,index)=>{
    console.log(element,index);
})

//itreating json objects : 
var obj = {
    sub_one : "Ramu",
    sub_two : "Pandu",
    sub_three : "Balu"
}
// obj.forEach((element,index)=>{
// console.log(element,index)
// })
for(var key in obj){
    console.log(key, obj[key])
}

var sys = Symbol(100);
console.log(sys)