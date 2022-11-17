const express=require('express');
const path=require('path');
const port=7000;
const app=express();

app.use("/",express.static('public'));
app.post('/',function(req,res)
{
    return res.redirect('/');
});


app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error");
    }
    else{
        console.log("MY server is running",port);
    }
});