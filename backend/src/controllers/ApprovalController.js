const Booking = require('../models/Booking')

module.exports ={
  async StorageEvent(req, res){
    return res.json({ok : true});
  }
};