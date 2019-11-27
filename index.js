const express = require("express");
const app = express();
const path = require('path')

app.listen(3000,()=>{
    console.log("Server is alive")
});


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.use(express.static(path.join(__dirname, 'public')))