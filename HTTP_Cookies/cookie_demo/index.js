const app=require("express")();

app.get("/",(req,res)=>{
    res.setHeader("set-cookie",["setfromserver=1"])
    res.sendFile(`${__dirname}/index.html`)
})


//path which tellls what cookies are sent to server
app.get("/path1",(req,res)=>{
    res.send(`I have  been sent these cookies Path 1:${req.headers.cookie}`);
})

app.get("/path2",(req,res)=>{
    res.send(`I have  been sent these cookies Path 2:${req.headers.cookie}`);
})

app.listen(8000,()=>{console.log("listening on port 8000")});