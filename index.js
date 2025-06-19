const express = require('express');
const dotenv = require('dotenv');

const app= express();

dotenv.config();
const PORT = process.env.PORT || 3000 ;
app.get('/',(req,res)=>{
    console.log("Request send on / route");
    return res.status(200).json({
        message:"ALL GOOD!!!!"
    })
})
app.listen(PORT,()=>{
    console.log(`Server has strated running at ${PORT} PORT`);
})