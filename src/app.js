const express=require("express");
const app=express();


app.use("/get",(req,res)=>{
   res.send("helloo....")
});
app.use("",(req,res)=>{
   res.send("first....")
})

app.listen(7777,()=>{
    console.log("server is running on 7777....")
})