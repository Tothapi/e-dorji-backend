const Event = require("../../models/events");
const User = require("../../models/User");

const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents),
    };
  } catch (err) {
    throw err;
  }
};
const events = async (eventIds) => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    events.map((event) => {
      return transformEvent(event);
    });
    return events;
  } catch (err) {
    throw err;
  }
};

const singleEvent = async (id) => {
  try {
    const event = await Event.findById(id);

    return transformEvent(event);
  } catch (error) {
    throw error;
  }
};

exports.user = user;
exports.events = events;
exports.singleEvent = singleEvent;
