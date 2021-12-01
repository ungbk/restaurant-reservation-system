const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/record/add-reservation").post(async function (req, response) {
  let db_connect = dbo.getDb();

  let unavailableTables = [];

  let myquery = { startDate: {$lt: req.body.endDate}, endDate: {$gt: req.body.startDate}};
  await db_connect
      .collection("reservations")
      .find(myquery)
      .forEach( function(doc) { 
        doc.tables.forEach(element => unavailableTables.push(element));
      } );
  
  let availableCapacity = 0;
  let tablesToUse = [];
  await db_connect
      .collection("tables")
      .find({})
      .forEach( function(doc) { 
        if(!unavailableTables.includes(doc.tableId)) {
          if(availableCapacity < req.body.numGuests) {
            tablesToUse.push(doc.tableId);
          }
          console.log(doc.capacity);
          availableCapacity += doc.capacity;
        }
      } );

  console.log(availableCapacity);
  
  try {
    if (availableCapacity < req.body.numGuests) {
      throw 'Not enough capacity for number of guests';
    } else {
      let myobj = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        numGuests: req.body.numGuests,
        tables: tablesToUse,
      };
      await db_connect.collection("reservations").insertOne(myobj, function (err, res) {
        if (err) throw err;
        let currDate = new Date(req.body.startDate)
        if(currDate.getDay() == 6 || currDate.getDay() == 0)
          response.json('Reservation added, special day (holiday/weekend), hold fee required');
        else
          response.json("Reservation successfully added");
      });
    }
  } catch(e) {
    response.json(e);
  }
  
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = recordRoutes;