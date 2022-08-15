import express from 'express'
import path from 'path'
const app=express();
const __dirname=path.resolve();

app.get('/api/table',(req,res)=>{
   res.sendFile("./table.html",{root:__dirname});
})

app.listen(3000,()=>{
    console.log("server is running on 3000")
})