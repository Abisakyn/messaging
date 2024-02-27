const mongoose= require ('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    type:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    // timestamp:{
    //     localDate.now()
    // }
})
module.exports= mongoose.model('Message',messageSchema);