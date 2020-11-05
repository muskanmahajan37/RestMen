const express = require("express");
const subscriber = require("../models/subscriber");
const router = express.Router();
const Subscriber = require("../models/subscriber");
//CRUD

//CREATE/POST ONE
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    username: req.body.username,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    //Success
    res.status(201).json(newSubscriber);
  } catch (err) {
    //user issue
    res.status(400);
  }
});

//READ/GET ALL
//on general route,no id needed
router.get("/", async (req, res) => {
  //res.send("Hello Universe");
  try {
    const subscriber = await Subscriber.find();
  } catch (err) {
    //500- our fault on server,not user
    res.status(500).json({ message: err.message });
  }
});

//READ/GET ONE
//need id
router.get("/:id", getSubscriber, (req, res) => {
  //json of subscriber
  res.send(res.subscriber);
});

//UPDATE/PUT/PATCH ONE
router.patch("/", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETE ONE
//need id
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Subscriber Deleted!!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// middleware to handle repeatative code
async function getSubscriber(req, res, next) {
  //move to next too code/part too
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Subscriber Not Found!!" });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  res.subscriber = subscriber;
  //move to next after the middleware
  next();
}

//export the module
module.exports = router;
