const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        maxlength:10,
        minlength:10,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
})

const Contacts = new mongoose.model("Contacts",contactSchema);
module.exports = Contacts