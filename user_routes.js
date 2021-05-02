
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const UserModel = require("../models/user_model");


const routes = express.Router();


// create new user

routes.post("/create_user",async(req,res,next)=>{

   try{

    // block of code
    const temp = new UserModel(req.body);
        var result = await temp.save();

    res.status(200).send(result);

   }catch(e)
   {   next(e);
       res.end();
   }


});

// get all users 

routes.get("/allusers",async(req,res,next)=>{

     try{

      // 
           var result = await UserModel.find({});
           res.status(200).send(result);

     }catch(e)
     {
          res.status(400).end();
     }

});


//delte single user

routes.delete("/delete_user/:id",async(req,res,next)=>{

    try{

          const id = req.params.id;
          var result = await UserModel.findByIdAndDelete({_id:id});
          res.status(200).send(result);

    }catch(e)
    {
         res.status(400).end();
    }

});

//Update single user

routes.patch("/update_user/:id",async(req,res,next)=>{

    try{

          const id = req.params.id;
          var result = await UserModel.findByIdAndUpdate({_id:id},req.body);
          res.status(200).send(result);

    }catch(e)
    {
         res.status(400).end();
    }

});

// export module
module.exports = routes ;