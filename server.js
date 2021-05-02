
const express = require("express");
const routes = require("./routes/user_routes");
const bodyparser = require("body-parser");
const db = require("./db/db");

const PORT = process.env.PORT || 3000;

const app = express();


// for json parsing
app.use(bodyparser.json());

// for url encoded data parsing
app.use(bodyparser.urlencoded({extended:true}));


// include routes
app.use("",routes);


// demo req
app.get("",(req,res)=>{
    
   res.send("hii welcome user");

});


// listen server
app.listen(PORT,()=>{
   console.log(`Server is listening on port ${PORT}`);
});




