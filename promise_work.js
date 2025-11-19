let pr= new Promise((res,rej)=>{
   
    setTimeout(() => {
        if(11%2==0){
            res("no is even")
        }else{
            rej("No is Odd")
        }
        
    }, 3000);
     console.log("promise startet")
})

pr.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})