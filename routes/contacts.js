const express = require("express");
const router = new express.Router();
const Contact = require("../models/contectSchema");

router.route("/contacts").get((req, res) => {
  Contact.find()
    .then((senders) => res.json(senders))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/contacts").post(async (req, res) => {
  try {
    const name = req.body.name;
    const phone = req.body.phone;
    const subject = req.body.subject;

    const sendMessage = new Contact({
      name: name,
      phone: phone,
      subject: subject,
    });
    const created = await sendMessage.save();
    console.log(created);
    res.status(200).send("Message Sent");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
