
const mongoose = require("mongoose");

const UserModel = mongoose.Schema({

     name:{
         type:String,
         trim:true,
         required:true
      },
      contact:{
        type:String,
        trim:true,
        required:true
      },
      age:{
        type:String,
        trim:true,
        required:true
      },
      class:{
        type:String,
        trim:true,
        required:true
      }


});

const UserModelData = mongoose.model("User_Details",UserModel);

module.exports = UserModelData;