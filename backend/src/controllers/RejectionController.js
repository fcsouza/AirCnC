const Booking = require('../models/Booking');

module.exports = {
  async store(req, res){
    const { booking_id } = req.params;

    const booking = await Booking.findById(booking_id).populate('spot');

    booking.approved = false;

    await booking.save();

    const bookingUserSocket = req.connectUsers[booking.user];

    if (bookingUserSocket) {
        req.io.to(bookingUserSocket).emit('booking_request', booking);
    }

    return res.json(booking);
  }
};