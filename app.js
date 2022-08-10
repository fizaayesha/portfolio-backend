const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/contectSchema");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database Established Successfully!");
});

app.post("/contacts", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;

    const sendMessage = new Contact({
      name: name,
      email: email,
      subject: subject,
    });
    const created = await sendMessage.save();
    console.log(created);
    res.status(200).send("Message Sent");
  } catch (err) {
    // res.status(400).send(err);
    console.log(err);
  }
});
// const contacts = require("./routes/contacts");
// app.use(contacts);

app.listen(port, () => {
  console.log("Server Running");
});
