//imoprts
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const bodyParser = require('body-parser')

const Student=require('./models/Notes')


//db connection
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/notes')
mongoose.connection.on('connected',()=>{
    console.log('database is connnected')
})
mongoose.connection.on('error',()=>{
    console.log('error occured');
})



//middlewares

app.use(cors())
app.use(express.json())



//routes
function getData(){
    app.get('/',(req,res)=>{
        Student.find().exec().then(data=>{
            res.status(200).send(data)
        })
        .catch(err=>{
            res.status(500).json({msg:" error occured"})
        })
    })
    

}
getData()


app.post('/notes',(req,res)=>{
   
    //for sending to databse using models
    const student=new Student({
        _id:new mongoose.Types.ObjectId,
        title:req.body.title,
        desc:req.body.desc,
        color:req.body.color
    });
    student.save()
    .then(data=>{
        console.log(data);
        res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({msg:" error occured"})
    })
 
})
app.delete('/notes/:id',(req,res)=>{
    const id=req.params.id;
    Student.remove({_id:id},(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send('error occured')
        }
        else{
            res.status(200).json({result})
        }
    })
})

//for updating
app.put('/notes/:id',(req,res)=>{
    const title=req.body.title
    const desc=req.body.desc
    const color=req.body.color
    const id=req.params.id
    Student.update({_id:id},{$set:{title:title,desc:desc,color:color}})
    .then(result=>{
        res.status(200).json({msg:"updated sucessfully"})
    }).catch(err=>res.status(500).json({msg:"error in updating"}))
})


//server
app.listen(5000,()=>{
    console.log('server is connected at port:5000')
})