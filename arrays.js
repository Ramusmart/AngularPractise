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
// console.log([1,2,3,4,5].fill(100,2));
// console.log([1,2,3,4,5].fill(200,1,3));
// console.log([1,2,3,4,5].fill(100,2));

// length to known the length of array
// arr.length = 4 // re-initializing the length of an array
// console.log(arr.length)
// console.log(arr[6])


//delete : delets but memory not removed.. Not suggestable

let arr1 = ['r','a','m','u'];
// delete arr1[2];
// console.log(arr1)
// console.log(arr1.length)

//push() : to add element at end of array 
//unshift() : to add at starting 
//pop() : remove at end 
//shift() : remove from begining 

// arr1.push('1');
// console.log(arr1)
// arr1.unshift('2')
// console.log(arr1)
// arr1.pop();
// console.log(arr1)
// arr1.shift()
// console.log(arr1)

// splice() : to remove from particular postion to how many counts or from specific index to all the elements AND used to add elements by giving index
// arr1.splice(1,2)
// console.log(arr1)
// arr1.splice(1,0,'X')
// console.log(arr1)
// deletion and addition :: using splice at single go 
// arr1.splice(2,1);
// console.log(arr1)
// arr1.splice(2,0,'m')
// // console.log(arr1)
// arr1.splice(2,1,'m')
// console.log(arr1)

//Slice() : to pick particular elements  


//console.log(arr1.slice(1,3))

//findIndex() : to know the index of particular element programatically.
// console.log(arr1.findIndex((element,index)=>{
//     return element == 'u';
// }))

// to delete an element programmatically : 
arr1.splice(arr1.findIndex((element,index)=>{
    element == 'r'
}),1)
console.log(arr1)
