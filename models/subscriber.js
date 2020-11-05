const mongoose = require("mongoose");
const { Schema } = mongoose;
const subscriberSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  hidden: Boolean,
  meta: {
    subscribers: Number,
    views: Number,
  },
});

//export the model
module.exports = mongoose.model("Subscriber", subscriberSchema);
