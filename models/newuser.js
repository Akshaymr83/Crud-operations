const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:{
        type:String
    },
    class:{
        type:Number
    },
    age:{
        type:Number
    }
})
const modelNew=mongoose.model('usernew',schema)
module.exports=modelNew