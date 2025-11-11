import express from "express";
const app=express();
import { Sum } from "./Sum.js";

let port=5000;

  const a=2;

app.get("/test",(req,res)=>{
     res.json({message:"i am root user"});
})

app.get("/getSum/:a/:b",async(req,res)=>{
     const {a,b}=req.params;
     res.json({
          ans:Sum(parseInt(a),parseInt(b))
     }) 
})

app.listen(port,()=>{
     console.log(`app is listen on ${port} `)
})