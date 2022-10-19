const express=require("express");
const app =express();
const port =process.env.PORT||3000;
app.get("/",(req,res)=>{



res.send("hLo World");
console.log("Request Recived ..........");

});
app.listen(port,()=>{


console.log('Listening..... At Port no ',port);



})