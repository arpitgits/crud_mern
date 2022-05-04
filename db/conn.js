const mongoose = require("mongoose");

const DB = "mongodb+srv://arpit:mongoodb@cluster0.yo2jv.mongodb.net/crud?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));