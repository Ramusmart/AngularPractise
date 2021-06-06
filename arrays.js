 let arr = [1,2,3,4,5,6,7];

// arr.forEach((element,index,array)=>{
//     console.log(element,index,array)
// })

// map : to manplate the array elements, returns a new array
// console.log(arr.map((element,index)=>{
//     return "$" + element;
// }))


//Filter : to apply some conditions, return is aray 

// console.log(arr.filter((element,index)=>{
//         return element>4;

// }));

// console.log(arr.filter((element,index)=>{
//     return element<=2
// }).map((element,index)=>{
//     return element*100;
// }))

// reduce() : want to find the summation of array elements 

// console.log(arr.reduce((firstElement,nextElement)=>{
//     return firstElement + nextElement;
// }))

// error when applied reduce on empty funtion : 
// console.log(arr.map((element,index)=>{
//     return element * 1000;
// }).filter((element,index)=>{
//     return element<1000;
// })).reduce((element,secondElement)=>{
//     return element+secondElement;
// })

//reduceRight() : summation from right to left concatition : 

// console.log(["ramu","to","welcome"].reduceRight((first,second)=>{
// return first+" " + second;
// }))

//some() : if atleast one condition satifsy it return true : 
// console.log([10,20,30,40,50].some((element,index,array)=>{
//     return element<50;
// }))


//every() : all should satifsy condition : 
// console.log([10,20,30,40,50].every((element,index,array)=>{
//     return element<60;
// }))

// fill() : to replace 
// console.log([1,2,3,4,5].fill(100));
console.log([1,2,3,4,5].fill(100,2));
console.log([1,2,3,4,5].fill(200,1,3));
console.log([1,2,3,4,5].fill(100,2));


