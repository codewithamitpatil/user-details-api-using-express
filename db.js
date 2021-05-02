
const mongoose = require("mongoose");

const connection = 
mongoose.connect("mongodb://localhost:27017/Users",{

   useCreateIndex:true,
   useNewUrlParser:true,
   useUnifiedTopology:true

}).then(()=>{
   console.log("connection made successfully");
}).catch((e)=>{
    console.log(`Error : ${e}`);
});