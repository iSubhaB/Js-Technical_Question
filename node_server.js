const http=require("http")

const port=3000;

const app=http.createServer((req,res)=>{
    res.write("Welcome to Node server")
    res.end()
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})