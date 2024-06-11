const { EventEmitter } = require("events");
const CommunicationLog = require("../models/communicationLog");

const pubsub = new EventEmitter();

pubsub.on("SEND_MESSAGE", async log => {
  await log.save();
  setTimeout(() => {
    log.status = Math.random() > 0.1 ? "SENT" : "FAILED";
    log.save();
  }, 1000);
});

const pubsubInit = () => {
  console.log("Pub/Sub initialized");
};

module.exports = { pubsub, pubsubInit };
