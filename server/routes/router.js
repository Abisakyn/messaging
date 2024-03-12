const express=require('express');
const { getNotification, getNotificationCount, message } = require('../controller/controller');

const router=express.Router();

router.get('/notifications',getNotification)
router.get('/notifications/count',getNotificationCount)
router.post('/message',message)

module.exports=router;