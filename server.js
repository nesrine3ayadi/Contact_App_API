const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongo_url = "mongodb://localhost:27017";
const dataBase = "contacts";

MongoClient.connect(mongo_url, (err, client) => {
  assert.equal(err, null, "data base connxion failed");

  const db = client.db(dataBase);
  //Post data from form:

  app.post("/add_contact", (req, res) => {
    let newContact = req.body;
    db.collection("contact").insertOne(newContact, (err, data) => {
      err ? res.send("error") : res.send("contact added");
    });
  });

  // Display data
  app.get("/display_contact", (req, res) => {
    db.collection("contact")
      .find()
      .toArray((err, data) => {
        err ? res.send("cant find contact") : res.send(data);
      });
  });
 
  // Display one data
  app.get("/display_onecontact/:id", (req, res) => {
    let idUser = ObjectID(req.params.id);
    db.collection("contact")
      .findOne({ _id: idUser })
      .then((data) => res.send(data))
      .catch((err) => console.error(err));
      
  });

  //Delete

  app.delete("/delete_contact/:id", (req, res) => {
    let id = ObjectID(req.params.id);
    db.collection("contact").findOneAndDelete({ _id: id }, (err, data) => {
      err ? res.send("cant delete contact") : res.send(data);
    });
  });

  // Update

  app.put("/update_contact/:id", (req, resp) => {
    let id = ObjectID(req.params.id);
    let contact = req.body;
    db.collection("contact").findOneAndUpdate(
      { _id: id },
      { $set: { ...contact } },
      (err, data) => {
        err ? resp.send("error") : resp.send(data);
      }
    );
  });
});

app.listen(5001, (err) => {
  if (err) console.log("server error");
  else console.log("server is running on Port 5001");
});
