for(var i=0;i<=5;i++){
    setTimeout(()=>{
        console.log(i); //output will be 6
    },5000)
}

for(let i=0;i<=5;i++){
    setTimeout(()=>{
        console.log(i); //output will be 0-6
    },5000)
}


