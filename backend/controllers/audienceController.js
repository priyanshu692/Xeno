const Audience = require("../models/audience");
const CommunicationLog = require("../models/communicationLog");
const { pubsub } = require("../utils/pubsub");

exports.createAudience = async (req, res) => {
  try {
    const audience = new Audience(req.body);
    await audience.save();
    res.status(201).json(audience);

    // Simulate message sending
    const message = `Hi, here is 10% off on your next order`;
    const log = new CommunicationLog({ audienceId: audience._id, message });

    pubsub.publish("SEND_MESSAGE", log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAudiences = async (req, res) => {
  try {
    const audiences = await Audience.find();
    res.status(200).json(audiences);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
