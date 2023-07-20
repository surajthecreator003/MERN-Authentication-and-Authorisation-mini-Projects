const app=require("express")();

app.get("/",(req,res)=>{
    res.setHeader("set-cookie",["setfromserver=1","jscantseethis=1 ;httponly"])
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/steal",(req,res)=>{res.send(`I highly obliged i stole these cookies from you : ${req.query.v}`)})

//path which tellls what cookies are sent to server
app.get("/path1",(req,res)=>{
    res.send(`I have  been sent these cookies Path 1:${req.headers.cookie}`);
})

app.get("/path2",(req,res)=>{
    res.send(`I have  been sent these cookies Path 2:${req.headers.cookie}`);
})

app.listen(8000,()=>{console.log("listening on port 8000")});