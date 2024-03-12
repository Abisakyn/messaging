const Message = require("../model/Message");
const notification = require("../model/notification")


exports.message=async(req,res)=>{
    try{
        // Create a new message based on the request body
    const message = new Message({
        text: req.body.text,
        // Add any other properties you want to include in the message
      });
  
      // Save the message to the database
      const savedMessage = await message.save();
  
      // Respond with the saved message
      res.status(201).json(savedMessage);
    }catch(error){
        console.log(error)
        res.json(error)
    }
}
exports.getNotification=async(req,res)=>{
   try{
    const notifications=await notification.find().sort('-date');
    res.json(notifications)
   }catch (error){
    console.log(error)
    res.json(error)
   }
}

exports.getNotificationCount=async (req,res)=>{
    try{
        const count = await notification.countDocuments();
        res.json(count)
    }catch(error){
        console.log(error)
        res.json(error)
    }
}