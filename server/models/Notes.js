const mongoose=require('mongoose');

const notesSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectID,
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true

    },
    color:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('notes',notesSchema)