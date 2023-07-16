const app=require("express")();

app.get("/",(req,res)=>{

    res.sendFile(`${__dirname}/index.html`)
})

app.listen(8000,()=>{console.log("listening on port 8000")});