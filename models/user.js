const mongoose=require('mongoose')

// schema creation
const userSchema=mongoose.Schema({

    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    }
})

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;