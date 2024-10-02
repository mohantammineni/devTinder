const express = require('express');

const app = express();

app.use("/home",(req,res) =>{
    res.send('hey whats up')
})

app.listen(3000, ()=>{
    console.log("server is successfylly running")
});