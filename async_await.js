async function abc(){
    try {
        let a=10
        let b=20
        const result= await (a+b)
        console.log(result)
        
    } catch (error) {
       console.log(error) 
    }
}
abc()