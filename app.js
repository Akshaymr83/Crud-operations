const express =require('express')
const app=express()
const port =7700;
const cors=require('cors')
const mongoose=require('mongoose')
const modelNew=require('./models/newuser')





mongoose.connect('mongodb://localhost:27017/class2')
.then(res=>{
    console.log('mongodb is connected')
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json())
app.use(cors())




app.get('/',(req,res)=>{
    try{
        res.json('hello world')
    }
    catch(err){
        console.log(err);
    }
})



app.listen(port,()=>{
    console.log('server is running');
})



