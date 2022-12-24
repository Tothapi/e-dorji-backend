const { dateToString } = require("../helpers/date");
const Booking = require("../../models/booking");
const { singleEvent, user } = require("./merge");
const Event = require("../../models/events");

const transformBooking = (booking) => {
  return {
    ...booking._doc,
    _id: booking.id,
    user: user.bind(this, booking._doc.user),
    event: singleEvent.bind(this, booking.event),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt),
  };
};

module.exports = {
  bookings: async () => {
    try {
      const booking = await Booking.find();
      return booking.map((booking) => {
        return transformBooking(booking);
      });
    } catch (error) {
      throw error;
    }
  },

  bookEvent: async (args) => {
    const fetchEvent = await Event.findOne({ _id: args.eventId });
    if (!fetchEvent) {
      throw new Error("No events found.");
    }
    const booking = new Booking({
      user: "639621289ed6bd88e6f70a89",
      event: fetchEvent,
    });
    const result = await booking.save();
    return transformBooking(result._doc);
  },
  cancelBooking: async (args) => {
    try {
      const booking = await Booking.findById(args.bookingId).populate("event");
      console.log("booking", booking);

      const event = transformEvent(booking.event);
      console.log(event, "event");

      await Booking.deleteOne({ _id: args.bookingId });
      return event;
      // const booking=await Booking.findById()
    } catch (error) {}
  },
};
